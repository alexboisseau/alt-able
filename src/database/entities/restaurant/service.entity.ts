import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';
import { SeatingTable } from './seatingTables.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: Date;

    @Column()
    done: boolean;

    @ManyToOne(() => SeatingTable, seatingTable => seatingTable.id)
    seatingTableId: SeatingTable;
}
  