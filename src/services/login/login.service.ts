import { Injectable } from '@nestjs/common';
import { ApiService } from '../api.service';
import { URI_LOGIN } from 'src/core/constants';
import { ILoginPay, ILoginResponsePay } from '../interfaces/login.interface';

@Injectable()
export class LoginService {
  constructor(private readonly apiService: ApiService) {}

  async loginPay(bodyParams: ILoginPay): Promise<ILoginResponsePay> {
    const uri = URI_LOGIN;
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
    });
    return result;
  }
}
