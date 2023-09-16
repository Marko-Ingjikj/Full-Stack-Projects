import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AnimalCharacteristicsDto } from './dtos/animal.dto';
import { Zookeeper } from 'src/zookeepers/zookeepers.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  age: number;

  @Column()
  location: string;

  @Column()
  gender: string;

  @Column('simple-json')
  characteristics: AnimalCharacteristicsDto;

  @Column({
    nullable: true,
  })
  zookeeperId: string;

  @ManyToOne(() => Zookeeper, (zookeeper) => zookeeper.animals)
  zookeeper: Zookeeper;
}
