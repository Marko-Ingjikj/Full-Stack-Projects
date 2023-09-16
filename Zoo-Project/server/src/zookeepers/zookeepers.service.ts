import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Zookeeper } from './zookeepers.entity';
import { Repository } from 'typeorm';
import { ZookeeperCreateDto, ZookeeperResponseDto } from './dtos/zookeeper.dto';
import { AnimalsService } from 'src/animals/animals.service';
import { log } from 'console';

@Injectable()
export class ZookeepersService {
  constructor(
    @Inject('ZOOKEEPER_REPOSITORY')
    private zookeepersRepository: Repository<Zookeeper>,
    private animalsService: AnimalsService,
  ) {}

  getAllZookeepers(): Promise<ZookeeperResponseDto[]> {
    return this.zookeepersRepository.find();
  }

  getZookeeperById(id: string): Promise<ZookeeperResponseDto> {
    return this.zookeepersRepository.findOne({
      where: { id },
      relations: ['animals'],
    });
  }

  addNewZookeeper(
    zookeeper: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeepersRepository.save(zookeeper);
  }

  async deleteZookeeper(id: string) {
    const zookeeper = await this.getZookeeperById(id);

    if (!zookeeper) {
      throw new NotFoundException("Couldn't find zookeeper with that ID");
    }

    await this.zookeepersRepository.delete(id);
    return 'Zookeeper deleted successfully';
  }

  async editZookeeper(
    id: string,
    zookeeperData: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    const zookeeper = await this.getZookeeperById(id);

    if (!zookeeper) {
      throw new NotFoundException("Couldn't find zookeeper with that ID");
    }

    try {
      await this.zookeepersRepository.save({
        id,
        ...zookeeperData,
      });
      return await this.getZookeeperById(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async assingAnimalToZookeeper(
    zookeeperId: string,
    animalId: string,
  ): Promise<ZookeeperResponseDto> {
    const zookeeper = await this.getZookeeperById(zookeeperId);

    if (!zookeeper) {
      throw new NotFoundException('Zookeeper with that ID can not be found');
    }

    const animalsToAdd = await this.animalsService.getAnimalById(animalId);

    zookeeper.animals = [...zookeeper.animals, animalsToAdd];
    await this.zookeepersRepository.save(zookeeper);

    return this.getZookeeperById(zookeeperId);
  }
}
