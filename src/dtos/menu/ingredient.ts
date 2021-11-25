import { DishDto } from './dish';

export class CreateIngredientDto {
  public name!: string;

  public quantity!: number;

  public unitOfMeasure!: string;

  public origin!: string;
}

export class IngredientDto extends CreateIngredientDto {
  public dishes!: DishDto[];

  public id!: string;
}
