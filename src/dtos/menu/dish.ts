import { Type } from 'class-transformer';
import { MenuDto } from './menu';
import { Id } from '../utils';
import { IngredientDto } from './ingredient';

export class CreateDishDto {
  public name!: string;

  public quantity!: number;

  public description!: string;

  public price!: number;

  public type!: string;

  @Type(() => Id)
  public ingredients!: Id[];
}

export class DishDto extends CreateDishDto {
  @Type(() => IngredientDto)
  public declare ingredients: IngredientDto[];

  public declare menus: MenuDto[];

  public id!: string;
}
