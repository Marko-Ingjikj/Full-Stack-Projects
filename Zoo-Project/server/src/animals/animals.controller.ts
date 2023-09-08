import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './animals.entity';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  getAllAnimals() {
    return this.animalsService.getAllAnimals();
  }

  @Post()
  addNewAnimal(@Body() body) {
    return this.animalsService.addNewAnimal(body);
  }
}
