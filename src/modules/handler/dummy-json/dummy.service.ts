import { Injectable } from '@nestjs/common';
import { ApiService } from '../api.service';
import { IDummyProductResponse } from '../interface/dummy-product.interface';

@Injectable()
export class DummyJsonService {
  constructor(private readonly apiService: ApiService) {}

  async getProduct(query: Record<string, string>): Promise<IDummyProductResponse> {
    const uri = 'https://dummyjson.com/products/search';
    const result = await this.apiService.handleRequest<IDummyProductResponse>({ uri, query });
    console.log(result);
    return result;
  }
}
