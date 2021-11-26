import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TableEntity } from './table.entity';
import { ServiceEntity } from './service.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @OneToOne(() => TableEntity)
  @JoinColumn()
  tableId: TableEntity;

  // @OneToOne(() => ServiceEntity, (item) => item.tickets)
  // @JoinColumn()
  // service: ServiceEntity;
}
