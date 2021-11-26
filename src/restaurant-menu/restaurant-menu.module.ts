import { Module } from '@nestjs/common';
import { DishService } from './dish/dish.service';
import { RestaurantMenuController } from './restaurant-menu.controller';

@Module({
  controllers: [RestaurantMenuController],
  providers: [DishService],
})
export class RestaurantMenuModule {}
