import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CarsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
