import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ZookeepersService } from './zookeepers.service';
import {
  AssignAnimalDto,
  ZookeeperCreateDto,
  ZookeeperResponseDto,
} from './dtos/zookeeper.dto';

@Controller('zookeepers')
export class ZookeepersController {
  constructor(private zookeepersService: ZookeepersService) {}

  @Get()
  getAllZookeepers(): Promise<ZookeeperResponseDto[]> {
    return this.zookeepersService.getAllZookeepers();
  }

  @Get(':id')
  getZookeeperById(@Param('id') id: string) {
    return this.zookeepersService.getZookeeperById(id);
  }

  @Post()
  addNewZookeeper(
    @Body() zookeeper: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeepersService.addNewZookeeper(zookeeper);
  }

  @Put(':id')
  editZookeeper(
    @Param('id') id: string,
    @Body() zookeeperData: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeepersService.editZookeeper(id, zookeeperData);
  }

  @Delete(':id')
  deleteZookeeper(@Param('id') id: string) {
    return this.zookeepersService.deleteZookeeper(id);
  }

  @Patch(':id/animals')
  assingAnimalToZookeeper(
    @Param('id') zookeeperId: string,
    @Body() body: AssignAnimalDto,
  ) {
    return this.zookeepersService.assingAnimalToZookeeper(
      zookeeperId,
      body.animalId,
    );
  }
}
