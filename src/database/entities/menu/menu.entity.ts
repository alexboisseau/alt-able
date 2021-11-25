import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from '../utils/base.entity';
import { DishEntity } from '.';
import { Type } from 'class-transformer';

@Entity()
export class MenuEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
  })
  public name: string;

  @Column({
    name: 'description',
    type: 'varchar',
  })
  public description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  public price: number;

  @ManyToMany(() => DishEntity, (item) => item.menus)
  @Type(() => DishEntity)
  public dishes: DishEntity[];
}
