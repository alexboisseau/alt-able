import { Column, Entity } from 'typeorm';

@Entity('Account')
export class AccountEntity {
  @Column({
    type: 'uuid',
    generated: 'uuid',
    primary: true,
  })
  public id!: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  public email!: string;

  @Column({
    type: 'varchar',
  })
  public password!: string;
}
