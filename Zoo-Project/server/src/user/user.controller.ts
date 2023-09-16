import { Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { RolesEnum } from 'src/auth/roles.enum';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Patch(':id/:role')
  updateUserRole(@Param('id') id: string, @Param('role') role: RolesEnum) {
    return this.userService.updateUserRole(id, role);
  }
}
