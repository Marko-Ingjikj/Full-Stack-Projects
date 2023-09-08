import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AnimalsController } from './animals.controller';
import { animalProviders } from './animals.providers';
import { AnimalsService } from './animals.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AnimalsController],
  providers: [...animalProviders, AnimalsService],
})
export class AnimalsModule {}
