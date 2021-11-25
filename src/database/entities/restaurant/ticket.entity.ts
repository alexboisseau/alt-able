import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Table } from './table.entity';
import { Service } from './service.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @OneToOne(() => Table)
  @JoinColumn()
  tableId: Table;

  @OneToOne(() => Service)
  @JoinColumn()
  serviceId: Service;
}
