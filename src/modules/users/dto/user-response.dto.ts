import { ApiProperty } from '@nestjs/swagger';
import { IUserTypeAttributesBase, IUserTypeAttributesBaseV2 } from '../interface/user.interface';

export class UserResponseDto implements IUserTypeAttributesBase {
  @ApiProperty({
    example: 'aff0f07d-970b-48da-b7e4-709a1b8cf1bc',
    type: String,
  })
  id: string;

  @ApiProperty({ example: 'Aezo27' })
  name: string;

  @ApiProperty({ example: 'example@mail.com' })
  email: string;

  @ApiProperty({ example: 1 })
  gender: number;

  @ApiProperty({ type: Boolean, example: true })
  status: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at?: Date;
}

export class UserResponseDtov2 extends UserResponseDto implements IUserTypeAttributesBaseV2 {
  @ApiProperty({
    example: '12-12-12',
    type: String,
  })
  dob: string;
}
