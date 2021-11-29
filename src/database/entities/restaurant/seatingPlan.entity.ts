import { Entity, Column, ManyToMany, CreateDateColumn } from 'typeorm';
import { TableEntity } from './table.entity';
import { BaseEntity } from '../utils';

@Entity('SeatingPlan')
export class SeatingPlanEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
  })
  public name!: string;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'time with time zone',
  })
  createdAt: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: true,
  })
  public description?: string | null;

  @Column({
    type: 'boolean',
    default: true,
  })
  public isActive: boolean;

  @ManyToMany(() => TableEntity, (item) => item.seatingPlans)
  public tables: TableEntity[];

  // @OneToMany(() => ServiceEntity, (item) => item.seatingPlan)
  // public services: ServiceEntity[];
}
