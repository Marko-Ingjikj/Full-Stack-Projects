import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserResponseDto } from './dtos/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  //   constructor(private authService: AuthService) {
  //     super();
  //   }
  //   async validate(emaiL: string, password: string): Promise<UserResponseDto> {
  //     const user = await this.authService.validateUser(email, password);
  //     return user;
  //   }
}
