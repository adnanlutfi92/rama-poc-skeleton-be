import { Test, TestingModule } from '@nestjs/testing';
import { TestingController } from './testing.controller';
import { TestingService } from './testing.service';
import { ExternalModule } from '../handler/external.module';

describe('TestingController', () => {
  let testingController: TestingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ExternalModule],
      controllers: [TestingController],
      providers: [TestingService],
    }).compile();

    testingController = app.get<TestingController>(TestingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(testingController.getHello()).toBe('Hello World!');
    });
  });
});
