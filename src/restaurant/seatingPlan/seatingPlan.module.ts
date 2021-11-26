import { Module } from '@nestjs/common';
import { RestaurantSeatingPlanService } from './seatingPlan.service';
import { RestaurantSeatingPlanController } from './seatingPlan.controller';

@Module({
  controllers: [RestaurantSeatingPlanController],
  providers: [RestaurantSeatingPlanService],
})
export class RestaurantSeatingPlanModule {}
