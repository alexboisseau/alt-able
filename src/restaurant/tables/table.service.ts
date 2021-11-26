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

  public async create(item: CreateRestaurantTableDto) {
    if (item.maxSize < 0) {
      throw new Error('max size is negative, it must be positive!');
    }
    const table = this.repository.create(item);
    return await this.repository.save(table);
  }

  public async list(): Promise<TableEntity[]> {
    return await this.repository.find();
  }

  public async get(id: string): Promise<TableEntity> {
    return await this.repository.findOneOrFail(id);
  }

  public async update(
    id: string,
    itemUpdated: TableEntity,
  ): Promise<TableEntity> {
    let item = await this.repository.findOneOrFail(id);
    item = { ...itemUpdated, id };
    await this.repository.save(item);

    return this.get(id);
  }

  public async destroy(id: string): Promise<void> {
    const item = await this.repository.findOneOrFail(id);
    await this.repository.remove(item);
  }
}
