import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../common/swagger';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { AuthService } from './auth.service';
import { LoginRequestPayDto } from './dto/login-request.dto';
import { LoginResponsePayDto } from './dto/login-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-pay')
  @SwaggerHelperDecorator({
    name: 'Login Payment Sistem',
    response: LoginResponsePayDto,
  })
  @ResponseMessage('Success Login Pay')
  @ResponseMessage('Success get product')
  async getProduct(@Body() loginRequestDto: LoginRequestPayDto): Promise<LoginResponsePayDto> {
    const result = this.authService.loginPay(loginRequestDto);

    return result;
  }
}
