import { Body, Controller, Post } from '@nestjs/common';
import { CreateMenuDto } from 'src/dtos/restaurant-menu';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly MenuService: MenuService) {}

  @Post()
  async create(@Body() CreateMenuDto) {}
}
