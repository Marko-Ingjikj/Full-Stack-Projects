import { DataSource } from 'typeorm';
import { Animal } from './animals.entity';
export const animalProviders = [
  {
    provide: 'ANIMAL_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Animal),
    inject: ['DATA_SOURCE'],
  },
];
