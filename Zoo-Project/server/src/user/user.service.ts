import { Repository } from 'typeorm';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { UserRegisterDto, UserResponseDto } from 'src/auth/dtos/auth.dto';
import { RolesEnum } from 'src/auth/roles.enum';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<UserResponseDto[]> {
    return this.userRepository.find({});
  }

  getUserById(id): Promise<UserResponseDto> {
    return this.userRepository.findOneByOrFail({ id });
  }

  async getUserByEmail(email: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException('User was not found');
    }

    return user;
  }

  register(user: UserRegisterDto): Promise<UserResponseDto> {
    return this.userRepository.save(user);
  }

  async updateUserRole(id: string, role: RolesEnum) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new NotFoundException('User was not found');
    }

    user.role = role;

    return this.userRepository.save(user);
  }
}
