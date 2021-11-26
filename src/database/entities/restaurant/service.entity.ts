import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SeatingPlanEntity } from './seatingPlan.entity';

@Entity('Service')
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  done: boolean;

  // @ManyToOne(() => SeatingPlanEntity, (seatingTable) => seatingTable.services)
  // seatingPlan: SeatingPlanEntity;
}
