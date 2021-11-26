import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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
  async get(@Param() id: string): Promise<RestaurantSeatingPlanDto> {
    return this.seatingTableService.get(id);
  }
}
