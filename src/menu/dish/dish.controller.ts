import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateDishDto } from '../../../src/dtos/menu/dish';
import { DishService } from './dish.service';

@Controller('menu')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post('/dish')
  async create(@Body() createDishDto: CreateDishDto) {
    const result = await this.dishService.create(createDishDto);

    if (result === false) {
      throw new HttpException(
        `${createDishDto.name} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return result;
  }

  @Get('/dishes')
  async getDishes() {
    return this.dishService.getDishes();
  }
}
