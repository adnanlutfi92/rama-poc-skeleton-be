import { Body, Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { TestingService } from './testing.service';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../common/swagger';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { TestingDto } from './dto/testing-request.dto';
import { TestingResponseDto } from './dto/testing-response.dto';
import { TransformationInterceptor } from '../../common/interceptors/transform.interceptor';
import { GetProductResponseDto } from './dto/get-product-response.dto';
import { GetProductDto } from './dto/get-product-request.dto';

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

  @Get('product')
  @SwaggerHelperDecorator({
    name: 'get dummyjson product',
    // isAuth: true,
    response: GetProductResponseDto,
  })
  // @UseGuards(AuthGuard)
  @UseInterceptors(TransformationInterceptor)
  @ResponseMessage('Success get product')
  async getProduct(@Query() getProductDto: GetProductDto): Promise<GetProductResponseDto> {
    const result = this.testingService.getDummyProduct(getProductDto);

    return result;
  }
}
