import { UnauthorizedException } from '@nestjs/common';

export class MissingTokenException extends UnauthorizedException {
  constructor(readonly message: string = 'Missing Token') {
    super(message);
  }
}

export class InvalidTokenException extends UnauthorizedException {
  constructor(readonly message: string = 'Invalid Token Access') {
    super(message);
  }
}
