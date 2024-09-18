import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { TestingService } from './testing.service';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../common/libs/swagger';
import { TransformationInterceptor } from '../common/libs/interceptors/transform.interceptor';
import { ResponseMessage } from '../common/libs/decorators/response-message.decorator';
import { TestingDto } from './dto/testing.dto';
import { TestingResponseDto } from './dto/testing-response.dto';

@ApiTags('Testing')
@Controller('testing')
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Get('')
  @SwaggerHelperDecorator({
    name: 'Hellow world',
  })
  @ResponseMessage('Success')
  getHello(): string {
    const user = 'Hello World!';

    return user;
  }

  @Post('test')
  @SwaggerHelperDecorator({
    name: 'Add new users',
    // isAuth: true,
    response: TestingResponseDto,
  })
  // @UseGuards(AuthGuard)
  @UseInterceptors(TransformationInterceptor)
  @ResponseMessage('Success add new users')
  addUser(@Body() registerDto: TestingDto): TestingResponseDto {
    const user = this.testingService.getTesting();

    return user;
  }
}
