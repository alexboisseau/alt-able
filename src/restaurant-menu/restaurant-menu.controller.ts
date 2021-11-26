import { Controller, Get } from '@nestjs/common';
import { DishService } from './dish/dish.service';

@Controller('menu')
export class RestaurantMenuController {
  constructor(private dishService: DishService) {}

  @Get()
  async getRestaurantMenu() {
    return this.dishService.getDishes();
  }
}
