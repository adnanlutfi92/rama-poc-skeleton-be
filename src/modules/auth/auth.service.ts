import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestPasDto, LoginRequestPayDto } from './dto/login-request.dto';
import { LoginService } from 'src/services/login/login.service';
import { ILoginResponsePas, ILoginResponsePay } from 'src/services/interfaces/login.interface';
import { PasswordMismatchException } from './exception/login.exception';
import { InvalidTokenException, MissingTokenException } from './exception/auth.exception';
import { IJWTPayloadPAS } from './interfaces/auth.interfaces';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  private checkTokenValidity(bearer: string): string {
    try {
      const token = bearer.split(' ');

      if (token[0] == 'Bearer' && token[1]) {
        return token[1];
      }

      throw new InvalidTokenException();
    } catch (error) {
      throw new InvalidTokenException();
    }
  }

  getMe(request: Request): IJWTPayloadPAS {
    if (!request.headers.authorization) throw new MissingTokenException();
    const token: string = this.checkTokenValidity(request.headers.authorization!);
    const payload: IJWTPayloadPAS = this.jwtService.verify(token, { secret: process.env.JWT_SECRET! });

    if (new Date(payload.identity.token_expirity).getTime() < new Date().getTime()) {
      throw new InvalidTokenException();
    }

    return payload;
  }

  async loginPay(body: LoginRequestPayDto): Promise<ILoginResponsePay> {
    const login = await this.loginService.loginPay(body);
    if (login.access_token && login.access_token !== null) {
      return login;
    } else {
      throw new PasswordMismatchException();
    }
  }

  async loginPas(body: LoginRequestPasDto): Promise<ILoginResponsePas> {
    const login = await this.loginService.loginPas(body);
    if (login.status) {
      return login;
    } else {
      throw new PasswordMismatchException();
    }
  }
}
