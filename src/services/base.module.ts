import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { DummyJsonService } from './dummy-json/dummy.service';
import { LoginService } from './login/login.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [],
  providers: [ApiService, DummyJsonService, LoginService, JwtService],
  exports: [ApiService, DummyJsonService, LoginService, JwtService],
})
export class BaseModule {}
