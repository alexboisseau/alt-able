import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { DishEntity } from '../restaurant-menu/dish.entity';
import { MenuEntity } from '../restaurant-menu/menu.entity';
import { Bill } from './bill.entity';

@Entity()
export class BillDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DishEntity)
  @JoinColumn()
  dishId: DishEntity;

  @OneToOne(() => MenuEntity)
  @JoinColumn()
  menuId: MenuEntity;

  @OneToOne(() => Bill)
  @JoinColumn()
  billId: Bill;

  @Column()
  quantity: number;

  @Column()
  comment: string;
}
