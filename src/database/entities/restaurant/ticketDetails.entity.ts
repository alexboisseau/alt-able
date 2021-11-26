import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { DishEntity } from '../restaurant-menu/dish.entity';
import { MenuEntity } from '../restaurant-menu/menu.entity';
import { Ticket } from './ticket.entity';

@Entity()
export class TicketDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DishEntity)
  @JoinColumn()
  dishId: DishEntity;

  @OneToOne(() => MenuEntity)
  @JoinColumn()
  menuId: MenuEntity;

  @OneToOne(() => Ticket)
  @JoinColumn()
  ticketId: Ticket;

  @Column()
  quantity: number;

  @Column()
  comment: string;
}
