import { Injectable } from '@nestjs/common';
import { DummyJsonService } from '../../services/dummy-json/dummy.service';
import { GetProductDto } from './dto/get-product-request.dto';
import { GetProductResponseDto } from './dto/get-product-response.dto';
import { TestingResponseDto } from './dto/testing-response.dto';

@Injectable()
export class TestingService {
  constructor(private dummyJsonService: DummyJsonService) {}
  getTesting(): TestingResponseDto {
    return {
      id: '',
      name: 'Rama Sullivan',
      email: 'ramasullivan27@gmail.com',
      status: true,
      createdAt: new Date(),
    };
  }

  async getDummyProduct(query: GetProductDto): Promise<GetProductResponseDto> {
    const product = await this.dummyJsonService.getProduct({ ...query });
    const result = { ...product, ini_tambahan: 'ini setelah update slur' };
    return result;
  }
}
