import { Injectable, Logger } from '@nestjs/common';
import { IApiRequest } from './interface/api-request.interface';

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
  }: IApiRequest): Promise<T> {
    const finalHeader: HeadersInit = {};
    let finalUri: string = uri;

    if (query) {
      const queryParam: string = new URLSearchParams(query).toString();
      finalUri = finalUri + '?' + queryParam;
    } else {
      if (!multipart) {
        Object.assign(finalHeader, {
          'Content-Type': 'application/json',
        });
      }
    }

    if (headers) {
      Object.assign(finalHeader, headers);
    }

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

      const logger = new Logger();

      logger.log(response);

      const resJson = (await response.json()) as T;
      return {
        ...resJson,
        traceId: response.headers.get('x-request-id'),
      } as T;
    } catch (error) {
      console.error(error);
    }
  }
}
