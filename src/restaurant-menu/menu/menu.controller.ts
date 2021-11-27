import { Body, Controller, Post } from '@nestjs/common';
import { CreateMenuDto } from 'src/dtos/restaurant-menu';
import { MenuService } from './menu.service';

@Controller('restaurant-menu/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    const newMenu = await this.menuService.createMenu(createMenuDto);

    return newMenu;
  }
}
