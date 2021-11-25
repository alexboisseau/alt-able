import { Type } from 'class-transformer';
import { Id } from '..';
import { DishDto } from './dish';

export class CreateMenuDto {
  public name!: string;

  public description!: string;

  public price!: number;

  @Type(() => Id)
  public dishes!: Id[];
}

export class MenuDto extends CreateMenuDto {
  @Type(() => DishDto)
  public dishes!: DishDto[];

  public id!: string;
}
