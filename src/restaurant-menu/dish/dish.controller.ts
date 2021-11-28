import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Param,
} from '@nestjs/common';
import { DishEntity } from 'src/database/entities';
import { CreateDishDto, UpdateDishDto } from '../../dtos/restaurant-menu/dish';
import { DishService } from './dish.service';

@Controller('menu')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post('/dish')
  async create(@Body() createDishDto: CreateDishDto) {
    try {
      return await this.dishService.create(createDishDto);
    } catch {
      throw new HttpException(
        `${createDishDto.name} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/dish/:id')
  async get(@Param() key: Pick<DishEntity, 'id'>) {
    return this.dishService.getDish(key.id);
  }

  @Get('/dishes')
  async getDishes() {
    return this.dishService.getDishes();
  }

  @Put('/dish/:id')
  async update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    try {
      const dish = await this.dishService.update(id, updateDishDto);
      return dish;
    } catch {
      throw new HttpException(
        "This dish doesn't exists and can't be update",
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
