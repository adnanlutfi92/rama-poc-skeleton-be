export interface ILoginPay {
  username: string;
  password: string;
  client_id: string;
  grant_type: string;
}

export interface ILoginResponsePay {
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  scope: string;
}
