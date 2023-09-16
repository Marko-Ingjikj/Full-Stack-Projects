import { Enclosure } from '../dtos/animal.dto';

export interface Animal {
  id: string;
  name: string;
  type: string;
  age: number;
  location: string;
  gender: string;
  characteristics: Characteristics;
  zookeeper?: string;
  zookeeperId?: string;
}

interface Characteristics {
  food: string[];
  color: string;
  isDangerous: boolean;
  weight: number;
  enclosure: Enclosure;
}
