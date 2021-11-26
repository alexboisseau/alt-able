import { Module } from '@nestjs/common';
import { DishService } from './dish/dish.service';
import { RestaurantMenuController } from './restaurant-menu.controller';
import { MenuService } from './menu/menu.service';

@Module({
  controllers: [RestaurantMenuController],
  providers: [DishService, MenuService],
})
export class RestaurantMenuModule {}
