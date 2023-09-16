import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserRegisterDto, UserResponseDto } from './dtos/auth.dto';
import { SALT_ROUNDS } from './auth.const';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {}

  // async register(body: UserRegisterDto): Promise<UserResponseDto> {
  //   const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);
  // }
}
