import { Type } from 'class-transformer';
import { MenuDto } from './menu';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { DishTypeEnum } from '../../database/entities/restaurant-menu/dish.entity';
import { Id } from '../utils';
import { IngredientDto } from './ingredient';

export class CreateDishDto {
  @IsNotEmpty()
  @IsString()
  public name!: string;

  @IsString()
  @IsNotEmpty()
  public description!: string;

  @IsNumber()
  public price!: number;

  @IsEnum(DishTypeEnum)
  public type!: DishTypeEnum;

  @IsArray()
  @IsNotEmpty()
  @Type(() => Id)
  public ingredients!: Id[];
}

export class DishDto extends CreateDishDto {
  @Type(() => IngredientDto)
  public declare ingredients: IngredientDto[];

  public declare menus: MenuDto[];

  public id!: string;
}
