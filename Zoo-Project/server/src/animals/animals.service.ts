import {
  Inject,
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Animal } from './interfaces/animal.interface';
import { Repository } from 'typeorm';
import { AnimalCreateDto, AnimalResponseDto } from './dtos/animal.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject('ANIMAL_REPOSITORY') private animalRepository: Repository<Animal>,
  ) {}

  getAllAnimals(): Promise<AnimalResponseDto[]> {
    return this.animalRepository.find();
  }

  addNewAnimal(body: AnimalCreateDto): Promise<AnimalResponseDto> {
    return this.animalRepository.save(body);
  }

  getAnimalById(id: string): Promise<AnimalResponseDto> {
    return this.animalRepository.findOne({
      where: { id },
      relations: ['zookeeper'],
    });
  }

  async editAnimal(id: string, animalData: AnimalCreateDto) {
    const animal = await this.getAnimalById(id);

    if (!animal) {
      throw new NotFoundException("Couln't find animal with that id");
    }

    try {
      await this.animalRepository.save({
        id,
        ...animalData,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    return await this.getAnimalById(id);
  }

  async deleteAnimal(id: string) {
    const animal = await this.animalRepository.delete(id);
    if (!animal) {
      return "Couldn't find animal with that ID";
    }
    return 'Animal deleted successfully';
  }

  async removeAnimalsFromZookeeper(id: string): Promise<void> {
    await this.animalRepository.save({ id, zookeeper: null });
  }
}
