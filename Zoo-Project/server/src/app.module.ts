import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { ZookeepersModule } from './zookeepers/zookeepers.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    AnimalsModule,
    ZookeepersModule,
    ConfigModule.forRoot(),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
