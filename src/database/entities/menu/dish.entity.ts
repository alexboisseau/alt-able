import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { MenuEntity } from './menu.entity';
import { BaseEntity } from '../utils/base.entity';
import { Type } from 'class-transformer';
import { IngredientEntity } from './ingredient.entity';

export enum DishTypeEnum {
  APERETIF = 'Apéritif',
  ENTREE = 'Entrée',
  PLAT_PRINCIPAL = 'Plat principal',
  DESSERT = 'Dessert',
  BOISSON = 'Boisson',
}

@Entity()
export class DishEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
  })
  public name: string;

  @Column({
    type: 'varchar',
    name: 'description',
  })
  public description: string;

  @Column('enum', { enum: DishTypeEnum, name: 'type' })
  public type: DishTypeEnum;

  @Column('decimal', { precision: 5, scale: 2 })
  public price: number;

  @Column({
    name: 'quantity',
    type: 'varchar',
  })
  public quantity: number;

  @ManyToMany(() => MenuEntity, (item) => item.dishes)
  @Type(() => MenuEntity)
  public menus!: MenuEntity[];

  @ManyToMany(() => IngredientEntity, (item) => item.dishes)
  @JoinTable({ name: 'menus_dishes' })
  @Type(() => IngredientEntity)
  public ingredients!: IngredientEntity[];
}
