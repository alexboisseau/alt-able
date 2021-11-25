import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../utils';

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
}
