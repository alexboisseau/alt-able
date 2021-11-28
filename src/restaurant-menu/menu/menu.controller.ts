import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateMenuDto } from 'src/dtos/restaurant-menu';
import { MenuService } from './menu.service';

@Controller('restaurant-menu/')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('menu')
  async create(@Body() createMenuDto: CreateMenuDto) {
    try {
      return await this.menuService.createMenu(createMenuDto);
    } catch {
      throw new HttpException(
        `${createMenuDto.name} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('menus')
  async getMenus() {
    return await this.menuService.getMenus();
  }
}
