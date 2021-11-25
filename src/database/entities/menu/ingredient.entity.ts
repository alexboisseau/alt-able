import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Dish } from './dish.entity';
import { BaseEntity } from '../utils/base.entity';

export enum UnitOfMeasure {
  GRAM = 'g',
  LITER = 'L',
}

@Entity()
export class Ingredient extends BaseEntity {
  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column({
    type: 'enum',
    enum: UnitOfMeasure,
  })
  unitOfMeasure: UnitOfMeasure;

  @Column()
  origin: string;

  @ManyToMany(() => Dish)
  @JoinTable({ name: 'dishes_ingredients' })
  dishes: Dish[];
}
