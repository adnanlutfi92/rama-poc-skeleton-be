import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const RESPONSE_MESSAGE_TAG = 'response_message';
export const ResponseMessage = (message: string): CustomDecorator<string> =>
  SetMetadata(RESPONSE_MESSAGE_TAG, message);
