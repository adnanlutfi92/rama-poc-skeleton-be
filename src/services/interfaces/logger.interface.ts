/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILoggerApi {
  url: string;
  body: string;
  header: string;
  request_time: Date;
  response_message: string;
  response_code: number;
  response_data: any;
  response_status: string;
  response_time: Date;
}
