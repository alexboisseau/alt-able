import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { RestaurantSeatingPlanService } from '../seatingPlan/seatingPlan.service';
import { RestaurantServiceService } from './restaurant-service.service';

@Controller('restaurant-service')
export class RestaurantServiceController {
  constructor(
    private restaurantServiceService: RestaurantServiceService,
    private seatingPlanService: RestaurantSeatingPlanService,
  ) {}

  @Post('create')
  async createService() {
    const seatingPlan = await this.seatingPlanService.setCurrentSeatingPlan();

    if (!seatingPlan) {
      throw new HttpException(
        'No seating plan. Please create Seating Plan before create a service.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.restaurantServiceService.create();
  }

  @Patch('close')
  async closeService() {
    await this.restaurantServiceService.closeService();

    return { success: true, message: 'Service has been closed successfully' };
  }

  @Get()
  async getServices() {
    return await this.restaurantServiceService.getServices();
  }
}
