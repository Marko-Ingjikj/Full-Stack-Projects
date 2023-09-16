import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ZookeepersController } from './zookeepers.controller';
import { ZookeepersService } from './zookeepers.service';
import { zookeeperProviders } from './zookeepers.providers';
import { AnimalsService } from 'src/animals/animals.service';
import { animalProviders } from 'src/animals/animals.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ZookeepersController],
  providers: [
    ...zookeeperProviders,
    ...animalProviders,
    ZookeepersService,
    AnimalsService,
  ],
})
export class ZookeepersModule {}
