import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ILoginPay } from 'src/services/interfaces/login.interface';

export class LoginRequestPayDto implements ILoginPay {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  client_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  grant_type: string;
}
