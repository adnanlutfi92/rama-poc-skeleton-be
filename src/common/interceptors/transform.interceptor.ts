// https://stackoverflow.com/questions/60189849/how-to-format-response-before-sending-in-nest-js

import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BasePaginationResponseDTO, BaseResponseDTO } from '../base';
import { Observable, map } from 'rxjs';
import { RESPONSE_MESSAGE_TAG } from '../decorators/response-message.decorator';

@Injectable()
export class TransformationInterceptor<T> implements NestInterceptor<T, BaseResponseDTO<T>> {
  constructor(private reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<BaseResponseDTO<T>> {
    return next.handle().pipe(
      map((data) => ({
        message: this.reflector.get<string>(RESPONSE_MESSAGE_TAG, context.getHandler()) || data.message || '',
        statusCode: 200,
        data,
      })),
    );
  }
}

@Injectable()
export class TransformationPagination<T> implements NestInterceptor<T, BasePaginationResponseDTO<T>> {
  logger: Logger;

  constructor(private reflector: Reflector) {
    this.logger = new Logger(TransformationPagination.name);
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<BasePaginationResponseDTO<T>> {
    return next.handle().pipe(
      map((data) => {
        this.logger.warn(data);

        return {
          message: this.reflector.get<string>('response_message', context.getHandler()) || data.message || '',
          statusCode: context.switchToHttp().getResponse().statusCode,
          data: data.results ?? [],
          pagination: data.pagination,
        };
      }),
    );
  }
}
