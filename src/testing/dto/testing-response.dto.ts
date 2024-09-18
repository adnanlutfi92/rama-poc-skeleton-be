import { ApiProperty } from '@nestjs/swagger';

export class TestingResponseDto {
  @ApiProperty({
    example: 'aff0f07d-970b-48da-b7e4-709a1b8cf1bc',
    type: String,
  })
  id: string;

  @ApiProperty({ example: 'Aezo27' })
  name: string;

  @ApiProperty({ example: 'example@mail.com' })
  email: string;

  @ApiProperty({ type: Boolean, example: true })
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt?: Date;
}
