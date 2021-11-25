import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Ingredients } from './ingredients.entity';

export enum DishType {
  APERITIF = 'Apéritif',
  STARTER = 'Entrée',
  MAIN = 'Plat principal',
  DESSERT = 'DESSERT',
  DRINK = 'Boisson',
}

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: DishType,
  })
  type: DishType;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  quantity: number;

  @ManyToMany(() => Ingredients)
  @JoinTable()
  ingredients: Ingredients[];
}
