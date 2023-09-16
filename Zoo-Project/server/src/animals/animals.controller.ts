import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from './animals.entity';
import { AnimalCreateDto, AnimalResponseDto } from './dtos/animal.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  getAllAnimals(): Promise<AnimalResponseDto[]> {
    return this.animalsService.getAllAnimals();
  }

  @Get(':id')
  getAnimalById(@Param('id') id: string): Promise<AnimalResponseDto> {
    return this.animalsService.getAnimalById(id);
  }

  @Post()
  addNewAnimal(@Body() body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalsService.addNewAnimal(body);
  }

  @Put(':id')
  editAnimal(@Param('id') id: string, @Body() animalData: AnimalCreateDto) {
    return this.animalsService.editAnimal(id, animalData);
  }

  @Delete(':id')
  deleteAnimal(@Param('id') id: string) {
    return this.animalsService.deleteAnimal(id);
  }
}
