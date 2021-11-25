import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../utils/base.entity';
import { DishEntity } from '.';
import { Type } from 'class-transformer';

export type UnitOfMeasure = ['g', 'L'];

@Entity()
export class IngredientEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
  })
  public name: string;

  @Column({
    name: 'quantity',
    type: 'varchar',
  })
  public quantity: number;

  @Column({
    name: 'unitOfMeasure',
    type: 'enum',
    enum: ['g', 'L'],
    default: 'g',
  })
  public unitOfMeasure: UnitOfMeasure;

  @Column({
    name: 'origin',
    type: 'varchar',
  })
  public origin: string;

  @ManyToMany(() => DishEntity, (item) => item.ingredients)
  @JoinTable({ name: 'dishes_ingredients' })
  @Type(() => DishEntity)
  public dishes: DishEntity[];
}
