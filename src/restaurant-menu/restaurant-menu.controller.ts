import { Controller, Get } from '@nestjs/common';
import { DishService } from './dish/dish.service';
import { MenuService } from './menu/menu.service';

@Controller('menu')
export class RestaurantMenuController {
  constructor(
    private dishService: DishService,
    private menuService: MenuService,
  ) {}

  @Get()
  async getRestaurantMenu() {
    try {
      const dishes = await this.dishService.getAvailableDishes();
      const menus = await this.menuService.getMenus();

      return { dishes, menus };
    } catch (error) {
      console.log(error);
    }
  }
}