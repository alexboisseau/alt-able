import { Module } from '@nestjs/common';
import { RestaurantTableService } from './table.service';
import { RestaurantTableController } from './table.controller';
import { RestaurantServiceService } from '../restaurant-service/restaurant-service.service';

@Module({
  controllers: [RestaurantTableController],
  providers: [RestaurantTableService, RestaurantServiceService],
})
export class RestaurantTableModule {}
