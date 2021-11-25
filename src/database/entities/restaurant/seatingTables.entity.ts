import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Table } from './table.entity';
import { Service } from './service.entity';

@Entity()
export class SeatingTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateAdd: Date;

  @Column('text')
  description: string;

  @ManyToMany(() => Table)
  @JoinTable()
  tableIds: Table[];

  @OneToMany(() => Service, (service) => service.id)
  services: Service[];
}
