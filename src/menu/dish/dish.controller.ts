import { Controller, Post, Put, Body, Get, Param } from '@nestjs/common';
import { CreateDishDto, UpdateDishDto } from '../../../src/dtos/menu/dish';
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

  @Put('/dish/:id')
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishService.update(id, updateDishDto);
  }
}
