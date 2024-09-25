import { Injectable } from '@nestjs/common';
import { IApiRequest } from './interfaces/api-request.interface';
import { ILoggerApi } from './interfaces/logger.interface';
import { LOGGER } from 'src/core/constants';

@Injectable()
export class ApiService {
  async handleRequest<T>({
    uri,
    method = 'GET',
    query,
    body,
    token,
    headers,
    cache,
    multipart = false,
    encode = false,
  }: IApiRequest): Promise<T> {
    let finalHeader: HeadersInit = {};
    let finalUri: string = uri;

    if (query) {
      const queryParam: string = new URLSearchParams(query).toString();
      finalUri = finalUri + '?' + queryParam;
    } else {
      if (!encode) {
        finalHeader = { 'Content-Type': 'application/json' };
      }
    }

    if (headers) {
      Object.assign(finalHeader, headers);
    }

    const loggerTemplate: ILoggerApi = {
      url: finalUri,
      body: body ? (encode ? body.toString() : JSON.parse(body.toString())) : null,
      header: finalHeader,
      request_time: new Date(),
      response_data: null,
      response_message: null,
      response_code: 200,
      response_status: 'OK',
      response_time: new Date(),
    };

    try {
      const response = await fetch(finalUri, {
        method,
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          ...finalHeader,
        },
        cache,
        body,
      });
      const resJson = (await response.json()) as T;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateRes = resJson as any;
      loggerTemplate.response_message = (updateRes.message || updateRes.error) ?? '';
      loggerTemplate.response_data = updateRes.data ?? null;
      loggerTemplate.response_code = (Number(updateRes.status_code) || Number(updateRes.statusCode)) ?? 500;
      loggerTemplate.response_status = updateRes.status ?? 'Error';
      loggerTemplate.response_time = new Date();
      LOGGER.log(loggerTemplate);
      return resJson as T;
    } catch (error) {
      throw new Error(error);
    }
  }
}
