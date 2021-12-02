import { Injectable } from '@nestjs/common';
import type { UserDto, CreateUserDto } from '../../dtos/auth';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CitizenService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  public async create(dto: CreateUserDto): Promise<UserDto> {
    const response = this.repository.create(dto);
    await this.repository.save(response);

    return response;
  }
}
