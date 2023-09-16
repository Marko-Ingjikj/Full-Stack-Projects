import { DataSource } from 'typeorm';
import { Zookeeper } from './zookeepers.entity';
export const zookeeperProviders = [
  {
    provide: 'ZOOKEEPER_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Zookeeper),
    inject: ['DATA_SOURCE'],
  },
];
