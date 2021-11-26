import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { TableEntity } from './table.entity';
import { ServiceEntity } from './service.entity';
import { BaseEntity } from '../utils';

@Entity('SeatingPlan')
export class SeatingPlanEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
  })
  public name!: string;

  @Column({
    name: 'dateAdd',
    type: 'timestamp with time zone',
  })
  public dateAdd!: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: true,
  })
  public description?: string | null;

  @ManyToMany(() => TableEntity, (item) => item.seatingPlans)
  public tables: TableEntity[];

  // @OneToMany(() => ServiceEntity, (item) => item.seatingPlan)
  // public services: ServiceEntity[];
}
