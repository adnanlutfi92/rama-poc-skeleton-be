import { Module } from '@nestjs/common';
import { UsersController } from './v1/users.controller';
import { UsersRepository } from './v1/users.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository],
})
export class UsersModule {}
