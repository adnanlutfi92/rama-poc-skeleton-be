export interface ILoginRequestPay {
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
export interface ILoginRequestPas {
  username: string;
  password: string;
  organization_id: string;
}

export interface ILoginResponsePas {
  status: boolean;
  code: string;
  message: string;
  organization_id: string;
  data: {
    token: string;
  };
}
