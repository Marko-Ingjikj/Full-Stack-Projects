import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [DatabaseModule, AnimalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
