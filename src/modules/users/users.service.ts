import { UserResponseDto } from './dto/user-response.dto';
import { User } from './users.entity';

export class UserService {
  async getUser(): Promise<UserResponseDto[]> {
    return await User.findAll({
      attributes: ['id', 'name', 'email', 'gender', 'status', 'created_at', 'updated_at'],
    });
  }
}
