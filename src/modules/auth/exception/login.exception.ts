import { UnauthorizedException } from '@nestjs/common';

export class PasswordMismatchException extends UnauthorizedException {
  constructor(readonly message: string = 'Invalid Credentials') {
    super(message);
  }
}
