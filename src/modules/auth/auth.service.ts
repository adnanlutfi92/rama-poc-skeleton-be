import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestPasDto, LoginRequestPayDto } from './dto/login-request.dto';
import { LoginService } from 'src/services/login/login.service';
import { ILoginResponsePas, ILoginResponsePay } from 'src/services/interfaces/login.interface';
import { PasswordMismatchException } from './exception/login.exception';
// import { UserNotFoundException } from '../users/exception/login.exceptipn';

@Injectable()
export class AuthService {
  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  // async validateUser(email: string, password: string): Promise<User> {
  //   const hashedPassword = Buffer.from(password).toString('base64');
  //   const checkLogin: User = await this.usersService.findOneByEmail(email);
  //   if (!user) {
  //     throw new UserNotFoundException('User not found');
  //   }
  //   const isMatch: boolean = bcrypt.compareSync(password, user.password);
  //   if (!isMatch) {
  //     throw new BadRequestException('Password does not match');
  //   }
  //   return user;
  // }

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
