import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import {
  LoginResponseDto,
  UserLoginDto,
  UserRegisterDto,
  UserResponseDto,
} from './dtos/auth.dto';
import { SALT_ROUNDS } from './auth.const';
import * as bcrypt from 'bcrypt';
import { RolesEnum } from './roles.enum';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {}

  async register(body: UserRegisterDto): Promise<UserResponseDto> {
    const hashedPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

    const response = await this.userService.register({
      ...body,
      password: hashedPassword,
    });

    return response;
  }

  async login(credentials: UserLoginDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(
      credentials.email,
      credentials.password,
    );

    const accessToken = this.jwtService.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    return {
      user,
      accessToken,
    };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserResponseDto> {
    const user = await this.userService.getUserByEmail(email);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Wrong credentials');
    }

    return user;
  }
}
