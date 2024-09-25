import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseModule } from 'src/services/base.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [BaseModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
