import { Min } from 'class-validator';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../utils';
import { SeatingPlanEntity } from './seatingPlan.entity';

@Entity('Table')
export class TableEntity extends BaseEntity {
  @Column({
    name: 'status',
    type: 'boolean',
    default: true,
  })
  isFree: boolean;

  @Column({
    name: 'size',
    type: 'varchar',
  })
  @Min(0)
  maxSize: number;

  @Column({
    name: 'number',
    type: 'varchar',
    unique: true,
  })
  number: number;

  @Column({
    name: 'installedCustomersNumber',
    type: 'int',
    default: 0,
  })
  installedCustomersNumber: number;

  @ManyToMany(() => SeatingPlanEntity, (item) => item.tables)
  @JoinTable()
  public seatingPlans: SeatingPlanEntity[];
}
