import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

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
