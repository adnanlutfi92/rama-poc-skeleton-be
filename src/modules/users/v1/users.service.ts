import { UserResponseDto } from '../dto/user-response.dto';
import { User } from '../entity/users.entity';

export class UsersService {
  async getUser(): Promise<UserResponseDto[]> {
    return await User.findAll({
      attributes: ['id', 'name', 'email', 'gender', 'status', 'created_at', 'updated_at'],
    });
  }
}
