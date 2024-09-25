export interface IApiRequest {
  uri: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  query?: Record<string, string>;
  body?: BodyInit;
  token?: string;
  isBodyJson?: boolean;
  headers?: HeadersInit;
  cache?: RequestCache;
  multipart?: boolean;
  encode?: boolean;
}
