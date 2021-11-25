import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Dish } from './dish.entity';
import { BaseEntity } from '../utils/base.entity';

@Entity()
export class Menu extends BaseEntity {
  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @ManyToMany(() => Dish)
  @JoinTable({ name: 'menus_dishes' })
  dishes: Dish[];
}
