import { Module } from '@nestjs/common';
import { RestaurantSeatingPlanService } from './seatingPlan.service';
import { RestaurantSeatingPlanController } from './seatingPlan.controller';
import { RestaurantServiceService } from '../restaurant-service/restaurant-service.service';

@Module({
  controllers: [RestaurantSeatingPlanController],
  providers: [RestaurantSeatingPlanService, RestaurantServiceService],
})
export class RestaurantSeatingPlanModule {}
