import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Id } from '..';
import { DishDto } from './dish';

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  public name!: string;

  @IsString()
  public description!: string;

  @IsNumber()
  public price!: number;

  @IsArray()
  @Type(() => Id)
  public dishes!: Id[];
}

export class MenuDto extends CreateMenuDto {
  @Type(() => DishDto)
  public dishes!: DishDto[];

  public id!: string;
}
