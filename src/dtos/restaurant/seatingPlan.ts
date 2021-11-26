import { RestaurantTableDto } from './table';
import { Type } from 'class-transformer';
import { Id } from '../utils';

export class CreateRestaurantSeatingPlanDto {
  public dateAdd!: string;

  public name!: string;

  public description!: string;

  @Type(() => Id)
  public tables!: Id[];
}

export class RestaurantSeatingPlanDto extends CreateRestaurantSeatingPlanDto {
  @Type(() => RestaurantTableDto)
  public tables!: RestaurantTableDto[];

  public id!: string;
}
