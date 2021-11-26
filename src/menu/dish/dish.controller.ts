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
    try {
      return await this.dishService.create(createDishDto);
    } catch {
      throw new HttpException(
        `${createDishDto.name} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/dishes')
  async getDishes() {
    return this.dishService.getDishes();
  }
}
