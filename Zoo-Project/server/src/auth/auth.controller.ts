import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginResponseDto,
  UserLoginDto,
  UserRegisterDto,
  UserResponseDto,
} from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: UserRegisterDto): Promise<UserResponseDto> {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: UserLoginDto): Promise<LoginResponseDto> {
    return this.authService.login(body);
  }
}
