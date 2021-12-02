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
  Patch,
} from '@nestjs/common';
import {
  CreateRestaurantTableDto,
  RestaurantTableDto,
  InstallCustomerDto,
} from '../../dtos';
import { RestaurantTableService } from './table.service';

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
  async delete(@Param() id: string) {
    return this.tableService.destroy(id);
  }

  @Patch('/customer-installation')
  async installCustomers(@Body() installCustomerDto: InstallCustomerDto) {
    try {
      const installCustomerResponse = await this.tableService.installCustomers(
        installCustomerDto,
      );
      return installCustomerResponse;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
