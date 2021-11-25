import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';
  
@Entity()
export class Ingredients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column()
    quantity: number;
  
    @Column('decimal', { precision: 5, scale: 2 })
    unitOfMeasure: string;

    @Column()
    origine: string;
}
      