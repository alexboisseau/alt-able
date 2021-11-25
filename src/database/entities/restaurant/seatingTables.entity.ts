import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { TableEntity } from './table.entity';
import { Service } from './service.entity';

@Entity()
export class SeatingTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateAdd: Date;

  @Column('text')
  description: string;

  @ManyToMany(() => TableEntity, (item) => item.SeatingTables)
  public tables: TableEntity[];

  @OneToMany(() => Service, (service) => service.id)
  services: Service[];
}
