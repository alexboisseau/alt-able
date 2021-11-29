import { Module } from '@nestjs/common';
import { RestaurantSeatingPlanService } from '../seatingPlan/seatingPlan.service';
import { RestaurantServiceController } from './restaurant-service.controller';
import { RestaurantServiceService } from './restaurant-service.service';

@Module({
  controllers: [RestaurantServiceController],
  providers: [RestaurantServiceService, RestaurantSeatingPlanService],
})
export class RestaurantServiceModule {}
