import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AnimalsModule } from './animals/animals.module';
import { ZookeepersModule } from './zookeepers/zookeepers.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, AnimalsModule, ZookeepersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
