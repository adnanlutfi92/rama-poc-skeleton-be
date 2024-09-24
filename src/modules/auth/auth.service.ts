import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/v1/users.repository';
// import { UserNotFoundException } from '../users/exception/login.exceptipn';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersRepository,
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
}
