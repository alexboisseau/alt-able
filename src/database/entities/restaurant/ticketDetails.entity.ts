import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Dish } from '../menu/dish.entity';
import { Menu } from '../menu/menu.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class TicketDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Dish)
  @JoinColumn()
  dishId: Dish;

  @OneToOne(() => Menu)
  @JoinColumn()
  menuId: Menu;

  @OneToOne(() => Ticket)
  @JoinColumn()
  ticketId: Ticket;

  @Column()
  quantity: number;

  @Column()
  comment: string;
}
