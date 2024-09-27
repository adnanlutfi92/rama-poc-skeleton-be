import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

@Catch()
export class BaseExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.message || 'An error occurred';

    const errorResponse = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    };

    response.status(statusCode).json(errorResponse);
  }
}

// TODO (adnan): Add more custom exception filters
export class NotFoundExceptionFilter extends NotFoundException {
  constructor(message?: string) {
    super(message, 'Not Found');
  }
}
