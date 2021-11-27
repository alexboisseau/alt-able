import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishEntity } from 'src/database/entities';

@Module({
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}