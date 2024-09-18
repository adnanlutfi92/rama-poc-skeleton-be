import { TestingResponseDto } from './dto/testing-response.dto';
import { v4 as uuidv4 } from 'uuid';

export class TestingService {
  getTesting(): TestingResponseDto {
    return {
      id: uuidv4(),
      name: 'Rama Sullivan',
      email: 'ramasullivan27@gmail.com',
      status: true,
      createdAt: new Date(),
    };
  }
}
