import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Dish } from './dish.entity';

export enum UnitOfMeasure {
  GRAM = 'g',
  LITER = 'L',
}

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

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
  @JoinTable()
  dishes: Dish[];
}
