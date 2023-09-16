import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Zookeeper } from '../interfaces/zookpeer';
import { AnimalResponseDto } from 'src/animals/dtos/animal.dto';

export class ZookeeperCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(18)
  age: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

export class AssignAnimalDto {
  @IsString()
  @IsUUID('all', { each: true })
  @IsNotEmpty({ each: true })
  animalId: string;
}

export class ZookeeperResponseDto
  extends ZookeeperCreateDto
  implements Zookeeper
{
  @IsUUID()
  @IsNotEmpty()
  id: string;

  animals: AnimalResponseDto[];
}
