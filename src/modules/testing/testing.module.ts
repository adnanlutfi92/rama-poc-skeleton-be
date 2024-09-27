import { Module } from '@nestjs/common';
import { TestingController } from './testing.controller';
import { TestingService } from './testing.service';
import { BaseModule } from '../../services/base.module';

@Module({
  imports: [BaseModule],
  controllers: [TestingController],
  providers: [TestingService],
})
export class TestingModule {}
