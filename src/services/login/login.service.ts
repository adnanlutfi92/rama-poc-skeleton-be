import { Injectable } from '@nestjs/common';
import { ApiService } from '../api.service';
import { URI_LOGIN_PAS, URI_LOGIN_PAY } from 'src/core/constants';
import {
  ILoginRequestPas,
  ILoginRequestPay,
  ILoginResponsePas,
  ILoginResponsePay,
} from '../interfaces/login.interface';

@Injectable()
export class LoginService {
  constructor(private readonly apiService: ApiService) {}

  async loginPay(bodyParams: ILoginRequestPay): Promise<ILoginResponsePay> {
    const uri = URI_LOGIN_PAY;
    const body = new URLSearchParams({
      username: bodyParams.username,
      password: Buffer.from(bodyParams.password).toString('base64'),
      grant_type: bodyParams.grant_type,
      client_id: bodyParams.client_id,
    });

    const result = await this.apiService.handleRequest<ILoginResponsePay>({
      uri,
      method: 'POST',
      body,
      encode: true,
    });
    return result;
  }

  async loginPas(bodyParams: ILoginRequestPas): Promise<ILoginResponsePas> {
    const uri = URI_LOGIN_PAS;
    const body = JSON.stringify(bodyParams);

    const result = await this.apiService.handleRequest<ILoginResponsePas>({
      uri,
      method: 'POST',
      body,
    });
    return result;
  }
}
