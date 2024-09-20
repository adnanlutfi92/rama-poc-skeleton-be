import { Module } from '@nestjs/common';
import { TestingModule } from './modules/testing/testing.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/v1/users.module';

@Module({
  imports: [TestingModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
