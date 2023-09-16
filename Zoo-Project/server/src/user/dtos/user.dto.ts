import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { RolesEnum } from 'src/auth/roles.enum';

export class UserDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsEnum(RolesEnum)
  @IsNotEmpty()
  roles: RolesEnum = RolesEnum.user;
}
