import { Injectable } from '@nestjs/common';
import { ApiService } from '../api.service';
import { IDummyProductResponse } from '../interfaces/dummy-product.interface';
import { URI_PRODUCT } from 'src/core/constants';

@Injectable()
export class DummyJsonService {
  constructor(private readonly apiService: ApiService) {}

  async getProduct(query: Record<string, string>): Promise<IDummyProductResponse> {
    const uri = URI_PRODUCT;
    const result = await this.apiService.handleRequest<IDummyProductResponse>({ uri, query });
    console.log(result);
    return result;
  }
}
