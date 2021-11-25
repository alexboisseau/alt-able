import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { DishEntity } from '../menu/dish.entity';
import { MenuEntity } from '../menu/menu.entity';
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
