import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super('User not found');
  }
}

export class PasswordMismatchException extends BadRequestException {
  constructor(readonly message: string = 'Password mismatch') {
    super(message);
  }
}
