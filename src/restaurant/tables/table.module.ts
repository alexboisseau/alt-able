import { Module } from '@nestjs/common';
import { RestaurantTableService } from './table.service';
import { RestaurantTableController } from './table.controller';

@Module({
  controllers: [RestaurantTableController],
  providers: [RestaurantTableService],
})
export class RestaurantTableModule {}
