import { Module } from '@nestjs/common';
import { UsersController } from './v1/users.controller';
import { UsersService } from './v1/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
