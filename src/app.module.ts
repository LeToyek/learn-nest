import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { DappModule } from './dapp/dapp.module';

@Module({
  imports: [CarsModule, UsersModule, DappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
