import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseEntity } from '../utils';
import { SeatingPlanEntity } from './seatingPlan.entity';

@Entity('Table')
export class TableEntity extends BaseEntity {
  @Column({
    name: 'status',
    type: 'varchar',
  })
  status: string;

  @Column({
    name: 'size',
    type: 'varchar',
  })
  size: number;

  @Column({
    name: 'number',
    type: 'varchar',
  })
  number: number;

  @ManyToMany(() => SeatingPlanEntity, (item) => item.tables)
  @JoinTable()
  public seatingPlans: SeatingPlanEntity[];
}
