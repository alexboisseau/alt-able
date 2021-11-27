import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from '../utils/base.entity';
import { DishEntity } from './dish.entity';
import { Type } from 'class-transformer';

@Entity()
export class MenuEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
    unique: true,
  })
  public name: string;

  @Column({
    name: 'description',
    type: 'varchar',
  })
  public description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  public price: number;

  @ManyToMany(() => DishEntity, (dish) => dish.menus)
  @Type(() => DishEntity)
  public dishes: DishEntity[];
}
