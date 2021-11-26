import { RestaurantTableDto } from './../../dtos/restaurant/table';
import { CreateRestaurantTableDto } from 'src/dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableEntity } from 'src/database/entities';

import { Repository } from 'typeorm';

@Injectable()
export class RestaurantTableService {
  constructor(
    @InjectRepository(TableEntity)
    private readonly repository: Repository<TableEntity>,
  ) {}

  public async create(createTableDto: CreateRestaurantTableDto) {
    const table = this.repository.create(createTableDto);
    return await this.repository.save(table);
  }

  public async list(): Promise<RestaurantTableDto[]> {
    return await this.repository.find();
  }

  public async get(id: string): Promise<RestaurantTableDto> {
    return await this.repository.findOneOrFail(id);
  }
}
