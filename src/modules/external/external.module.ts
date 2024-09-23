import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { DummyJsonService } from './DummyJson/dummy.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ApiService, DummyJsonService],
  exports: [ApiService, DummyJsonService],
})
export class ExternalModule {}
