import { ApiProperty } from '@nestjs/swagger';
import { IDummyProduct } from 'src/services/interfaces/dummy-product.interface';

export class GetProductResponseDto {
  @ApiProperty({
    example: [
      {
        id: 101,
        title: 'Apple AirPods Max Silver',
        category: 'mobile-accessories',
      },
    ],
  })
  products: IDummyProduct[];

  @ApiProperty({ example: 10 })
  total: number;

  @ApiProperty({ example: 0 })
  skip: number;

  @ApiProperty({ example: 0 })
  limit: number;

  @ApiProperty({ example: 'hohohoho' })
  ini_tambahan: string;
}
