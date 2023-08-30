import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { RolesEnum } from '../roles.enum';

export class UserLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  password: string;
}

export class UserResponseDto extends UserLoginDto {
  id: string;

  role: RolesEnum;
}

export class UserLoginResponseDto {
  user: UserResponseDto;

  accessToken: string;
}
