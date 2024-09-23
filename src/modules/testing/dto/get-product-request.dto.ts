import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class GetProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  query: string;
}
