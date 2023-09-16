import { Animal } from 'src/animals/interfaces/animal.interface';

export interface Zookeeper {
  id: string;
  name: string;
  age: number;
  location: string;
  isActive: boolean;
  animals: Animal[];
}
