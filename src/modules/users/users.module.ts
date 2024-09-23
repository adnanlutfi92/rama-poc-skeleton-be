import { Module } from '@nestjs/common';
import { UsersController } from './v1/users.controller';
import { UserService } from './v1/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
