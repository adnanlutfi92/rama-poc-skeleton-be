import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../common/swagger';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { AuthService } from './auth.service';
import { LoginRequestPasDto, LoginRequestPayDto } from './dto/login-request.dto';
import { LoginResponsePasDto, LoginResponsePayDto } from './dto/login-response.dto';
import { Public } from 'src/common/decorators/public-endpoint.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('login-pay')
  @SwaggerHelperDecorator({
    name: 'Login Payment Sistem',
    response: LoginResponsePayDto,
    isPublic: true,
  })
  @ResponseMessage('Success Login Pay')
  async loginPay(@Body() loginRequestDto: LoginRequestPayDto): Promise<LoginResponsePayDto> {
    const result = this.authService.loginPay(loginRequestDto);

    return result;
  }

  @Public()
  @Post('login-pas')
  @SwaggerHelperDecorator({
    name: 'Login Pas Sistem',
    response: LoginResponsePasDto,
    isPublic: true,
  })
  @ResponseMessage('Success Login Pas')
  async loginPas(@Body() loginRequestDto: LoginRequestPasDto): Promise<LoginResponsePasDto> {
    const result = this.authService.loginPas(loginRequestDto);

    return result;
  }
}
