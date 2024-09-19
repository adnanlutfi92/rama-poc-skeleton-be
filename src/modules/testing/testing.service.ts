import { TestingResponseDto } from './dto/testing-response.dto';

export class TestingService {
  getTesting(): TestingResponseDto {
    return {
      id: '',
      name: 'Rama Sullivan',
      email: 'ramasullivan27@gmail.com',
      status: true,
      createdAt: new Date(),
    };
  }
}
