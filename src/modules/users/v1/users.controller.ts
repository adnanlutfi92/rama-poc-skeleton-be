import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../../common/swagger';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { UserResponseDto } from '../dto/user-response.dto';
import { TransformationInterceptor } from '../../../common/interceptors/transform.interceptor';

@ApiTags('User')
@Controller('v1/user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @SwaggerHelperDecorator({
    name: 'Get User',
    // isAuth: true,
    response: UserResponseDto,
  })
  // @UseGuards(AuthGuard)
  @UseInterceptors(TransformationInterceptor)
  @ResponseMessage('Success get users')
  async getUser(): Promise<UserResponseDto[]> {
    const user = await this.userService.getUser();

    return user;
  }
}
