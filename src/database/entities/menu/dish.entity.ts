import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Menu } from './menu.entity';
import { BaseEntity } from '../utils/base.entity';

export enum DishType {
  APERITIF = 'Apéritif',
  STARTER = 'Entrée',
  MAIN = 'Plat principal',
  DESSERT = 'DESSERT',
  DRINK = 'Boisson',
}

@Entity()
export class Dish extends BaseEntity {
  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: DishType,
  })
  type: DishType;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  quantity: number;
}
