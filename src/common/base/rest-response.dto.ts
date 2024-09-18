import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BaseResponseDTO<T> {
  @ApiProperty({ type: Number, example: 200 })
  statusCode = 200;

  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty({ nullable: true })
  data?: T;
}

export class BasePaginationResponseDTO<T> {
  @ApiProperty({ type: Number, example: 200 })
  statusCode = 200;

  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty({ nullable: true, type: Array<T> })
  data?: T[];

  @ApiProperty({ nullable: true, example: null })
  error?: string;

  @ApiProperty({ nullable: true, type: () => Pagination })
  pagination?: IPagination;
}
export interface IPagination {
  page: number;
  size: number;
  total: number;
  totalPage: number;
}

class Pagination {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  size: number;

  @ApiProperty({ example: 100 })
  total: number;

  @ApiProperty({ example: 10 })
  totalPage: number;
}

export class DeleteDto {
  @ApiProperty()
  @IsNotEmpty()
  ids: string[];
}
