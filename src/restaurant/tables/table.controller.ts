import { TableEntity } from './../../database/entities/restaurant/table.entity';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { CreateRestaurantTableDto, RestaurantTableDto } from '../../dtos';
import { RestaurantTableService } from './table.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('tables')
export class RestaurantTableController {
  constructor(private readonly tableService: RestaurantTableService) {}

  @Post('/')
  async create(@Body() createTableDto: CreateRestaurantTableDto) {
    try {
      return await this.tableService.create(createTableDto);
    } catch {
      throw new HttpException(
        `Table ${createTableDto.number} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/')
  async list() {
    return this.tableService.list();
  }

  @Get('/:id')
  async get(@Param() key: Pick<TableEntity, 'id'>) {
    return this.tableService.get(key.id);
  }

  @Put('/:id')
  async update(@Param() id: string, @Body() item: RestaurantTableDto) {
    return this.tableService.update(id, item);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async delete(@Param() id: string) {
    return this.tableService.destroy(id);
  }
}
