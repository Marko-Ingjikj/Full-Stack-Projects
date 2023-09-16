import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { RolesEnum } from '../roles.enum';

export class UserLoginDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}

export class UserRegisterDto extends UserLoginDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UserResponseDto extends UserRegisterDto {
  id: string;

  role: RolesEnum;
}

export class LoginResponseDto {
  user: UserResponseDto;

  accessToken: string;
}
