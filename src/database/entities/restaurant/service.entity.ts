import { Entity, Column, CreateDateColumn } from 'typeorm';
import { BaseEntity } from '../utils';

@Entity('Service')
export class ServiceEntity extends BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  isDone: boolean;

  // @ManyToOne(() => SeatingPlanEntity, (seatingTable) => seatingTable.services)
  // seatingPlan: SeatingPlanEntity;
}
