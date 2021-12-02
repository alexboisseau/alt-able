import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity('Users')
export class UserEntity {
  @Column({
    type: 'uuid',
    generated: 'uuid',
    primary: true,
  })
  public id!: string;

  @Column({
    name: 'firstName',
    type: 'varchar',
  })
  public firstName!: string;

  @Column({
    name: 'lastName',
    type: 'varchar',
  })
  public lastName!: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  public email!: string;
}
