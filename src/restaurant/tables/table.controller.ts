import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateRestaurantTableDto } from '../../dtos';
import { RestaurantTableService } from './table.service';

@Controller('tables')
export class RestaurantTableController {
  constructor(private readonly tableService: RestaurantTableService) {}

  @Post('/')
  async create(@Body() createTableDto: CreateRestaurantTableDto) {
    return this.tableService.create(createTableDto);
  }

  @Get('/')
  async list() {
    return this.tableService.list();
  }

  @Get('/:id')
  async get(@Param() id: string) {
    return this.tableService.get(id);
  }
}
