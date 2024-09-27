import { Module } from '@nestjs/common';
import { TestingModule } from './modules/testing/testing.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TransformationInterceptor } from './common/interceptors/transform.interceptor';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';

import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [AuthModule, TestingModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformationInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
