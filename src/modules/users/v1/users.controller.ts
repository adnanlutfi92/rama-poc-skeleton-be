import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerHelperDecorator } from '../../../common/swagger';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { UserResponseDto } from '../dto/user-response.dto';
import { UsersRepository } from './users.repository';

@ApiTags('User')
@Controller('v1/user')
export class UsersController {
  constructor(private readonly usersService: UsersRepository) {}

  @Get('')
  @SwaggerHelperDecorator({
    name: 'Get User',
    // isAuth: true,
    response: UserResponseDto,
  })
  // @UseGuards(AuthGuard)
  @ResponseMessage('Success get users')
  async getUser(): Promise<UserResponseDto[]> {
    const user = await this.usersService.getUser();

    return user;
  }
}
