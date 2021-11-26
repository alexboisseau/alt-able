import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateRestaurantTableDto, RestaurantTableDto } from '../../dtos';
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

  @Put('/:id')
  async update(@Param() id: string, @Body() item: RestaurantTableDto) {
    return this.tableService.update(id, item);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return this.tableService.destroy(id);
  }
}
