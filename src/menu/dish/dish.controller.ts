import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateDishDto } from '../../../src/dtos/menu/dish';
import { DishService } from './dish.service';

@Controller('menu')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post('/dish')
  async create(@Body() createDishDto: CreateDishDto) {
    return this.dishService.create(createDishDto);
  }

  @Get('/dishs')
  async getDishs() {
    return this.dishService.getDishs();
  }
}
