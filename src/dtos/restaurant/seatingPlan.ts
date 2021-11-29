import { RestaurantTableDto } from './table';
import { Type } from 'class-transformer';
import { Id } from '../utils';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRestaurantSeatingPlanDto {
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsString()
  @IsOptional()
  public description?: string | null;

  @IsNotEmpty()
  @IsArray()
  @Type(() => Id)
  public tables!: Id[];

  @IsBoolean()
  public isActive = true;
}

export class RestaurantSeatingPlanDto extends CreateRestaurantSeatingPlanDto {
  @Type(() => RestaurantTableDto)
  public tables!: RestaurantTableDto[];

  public createdAt!: string;

  public id!: string;
}
