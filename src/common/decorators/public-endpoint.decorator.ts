/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);
