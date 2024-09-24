import { Module } from '@nestjs/common';
import { TestingController } from './testing.controller';
import { TestingService } from './testing.service';
import { ExternalModule } from '../handler/external.module';

@Module({
  imports: [ExternalModule],
  controllers: [TestingController],
  providers: [TestingService],
})
export class TestingModule {}
