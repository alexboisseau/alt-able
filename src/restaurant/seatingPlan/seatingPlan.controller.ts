import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SeatingPlanEntity } from 'src/database/entities';
import {
  CreateRestaurantSeatingPlanDto,
  RestaurantSeatingPlanDto,
} from '../../dtos';
import { RestaurantSeatingPlanService } from './seatingPlan.service';

@Controller('seating-plans')
export class RestaurantSeatingPlanController {
  constructor(
    private readonly seatingTableService: RestaurantSeatingPlanService,
  ) {}

  @Post('/')
  async create(@Body() item: CreateRestaurantSeatingPlanDto) {
    return this.seatingTableService.create(item);
  }

  @Get('/')
  async list(): Promise<RestaurantSeatingPlanDto[]> {
    return await this.seatingTableService.list();
  }

  @Get('/:id')
  async get(
    @Param() key: Pick<SeatingPlanEntity, 'id'>,
  ): Promise<RestaurantSeatingPlanDto> {
    return this.seatingTableService.get(key.id);
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() item: RestaurantSeatingPlanDto,
  ) {
    try {
      return await this.seatingTableService.update(id, item);
    } catch (error) {
      throw new HttpException(
        'An error is occured. Please, check that the name property is correct and not assigned to another table',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return this.seatingTableService.destroy(id);
  }
}
