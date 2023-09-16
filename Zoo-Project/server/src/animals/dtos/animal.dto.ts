import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Animal } from '../interfaces/animal.interface';

export enum Enclosure {
  Aquarium = 'aquarium',
  Terrarium = 'terrarium',
  Paludarium = 'paludarium',
  Riparium = 'riparium',
  Aviary = 'aviary',
  Herpetarium = 'herpetarium',
  Serpentarium = 'serpentarium',
  Insectarium = 'insectarium',
  Formicarium = 'formicarium',
  Kinocorium = 'kinocorium',
  Orchidarium = 'orchidarium ',
  Carnivarium = 'carnivarium ',
  Succularium = 'succularium ',
  Mossarium = 'mossarium',
}

export class AnimalCharacteristicsDto {
  @IsString()
  @IsNotEmpty()
  food: string[];

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsBoolean()
  @IsNotEmpty()
  isDangerous: boolean;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsEnum(Enclosure)
  @IsNotEmpty()
  enclosure: Enclosure;
}

export class AnimalCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  age: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['M', 'F'])
  gender: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AnimalCharacteristicsDto)
  characteristics: AnimalCharacteristicsDto;

  @IsOptional()
  @IsString()
  zookeeperId?: string;
}

export class AnimalResponseDto extends AnimalCreateDto implements Animal {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
