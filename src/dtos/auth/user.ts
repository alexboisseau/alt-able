import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public firstName!: string;
  @IsNotEmpty()
  @IsString()
  public lastName!: string;
  @IsNotEmpty()
  @IsEmail()
  public email!: string;
}

export class UserDto extends CreateUserDto {
  public id!: string;
}
