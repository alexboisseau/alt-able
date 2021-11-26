import { RestaurantTableDto } from './table';
import { Type } from 'class-transformer';
import { Id } from '../utils';
import { IsArray, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateRestaurantSeatingPlanDto {
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsEmpty()
  @IsString()
  public description?: string | null;

  @IsNotEmpty()
  @IsString()
  public dateAdd!: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => Id)
  public tables!: Id[];
}

export class RestaurantSeatingPlanDto extends CreateRestaurantSeatingPlanDto {
  @Type(() => RestaurantTableDto)
  public tables!: RestaurantTableDto[];

  public id!: string;
}
