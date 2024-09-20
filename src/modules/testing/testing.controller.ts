import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { TestingService } from './testing.service';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../common/swagger';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { TestingDto } from './dto/testing-request.dto';
import { TestingResponseDto } from './dto/testing-response.dto';
import { TransformationInterceptor } from '../../common/interceptors/transform.interceptor';

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
  addUser(@Query() registerDto: TestingDto): TestingResponseDto {
    const user = this.testingService.getTesting();

    return user;
  }
}
