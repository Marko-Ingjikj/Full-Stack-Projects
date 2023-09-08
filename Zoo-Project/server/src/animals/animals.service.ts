import { Inject, Injectable } from '@nestjs/common';
import { Animal } from './interfaces/animal.interface';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject('ANIMAL_REPOSITORY') private animalRepository: Repository<Animal>,
  ) {}

  getAllAnimals() {
    return this.animalRepository.find();
  }

  addNewAnimal(body) {
    this.animalRepository.save(body);
  }
}
