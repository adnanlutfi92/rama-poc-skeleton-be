import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TestingService } from './testing.service';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../common/swagger';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { TestingDto } from './dto/testing-request.dto';
import { TestingResponseDto } from './dto/testing-response.dto';
import { GetProductResponseDto } from './dto/get-product-response.dto';
import { GetProductDto } from './dto/get-product-request.dto';
import { Public } from 'src/common/decorators/public-endpoint.decorator';

@ApiTags('Testing')
@Controller('testing')
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Public()
  @Get('')
  @SwaggerHelperDecorator({
    name: 'Hellow world',
    isPublic: true,
  })
  @ResponseMessage('Success')
  getHello(): string {
    const user = 'Hello World!';

    return user;
  }

  @Post('add-user-dummy')
  @SwaggerHelperDecorator({
    name: 'Add new users',
    response: TestingResponseDto,
  })
  @ResponseMessage('Success add new users')
  addUser(@Body() registerDto: TestingDto): TestingResponseDto {
    const user = this.testingService.getTesting();

    return user;
  }

  @Get('product')
  @SwaggerHelperDecorator({
    name: 'get dummyjson product',
    response: GetProductResponseDto,
  })
  @ResponseMessage('Success get product')
  async getProduct(@Query() getProductDto: GetProductDto): Promise<GetProductResponseDto> {
    const result = this.testingService.getDummyProduct(getProductDto);

    return result;
  }
}
