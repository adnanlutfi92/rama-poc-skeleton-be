import { InternalServerErrorException } from '@nestjs/common';

export class FailedToFetchException extends InternalServerErrorException {
  constructor(readonly message: string = 'TypeError: Failed to Fetch') {
    super(message);
  }
}
