import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserResponseDto } from '../dto/user-response.dto';
import { UsersService } from './users.service';

describe('userController', () => {
  let usersController: UsersController;

  const mockUserRepository = {
    getUser: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('get user', () => {
    it('should return array of user', async () => {
      //arrange
      const user: UserResponseDto = {
        id: '01636c87-d0c4-4097-b8dd-2d0ebce65152',
        name: 'Rama Sullivan',
        email: 'ramasullivan27@gmail.com',
        gender: '1',
        status: true,
        created_at: new Date(),
        updated_at: null,
      };
      const users = [user];
      jest.spyOn(mockUserRepository, 'getUser').mockReturnValue(users);

      //act
      const result = await usersController.getUser();

      // assert
      expect(result).toEqual(users);
      expect(mockUserRepository.getUser).toHaveBeenCalled();
    });
  });
});
