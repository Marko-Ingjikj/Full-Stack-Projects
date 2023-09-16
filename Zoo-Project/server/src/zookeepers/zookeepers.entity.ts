import { Animal } from 'src/animals/animals.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Zookeeper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  location: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Animal, (animal) => animal.zookeeper)
  animals: Animal[];
}
