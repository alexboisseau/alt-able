import { CreateRestaurantSeatingPlanDto } from 'src/dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeatingPlanEntity } from 'src/database/entities';

import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class RestaurantSeatingPlanService {
  constructor(
    @InjectRepository(SeatingPlanEntity)
    private readonly repository: Repository<SeatingPlanEntity>,
  ) {}

  public async create(
    item: CreateRestaurantSeatingPlanDto,
  ): Promise<SeatingPlanEntity> {
    const { id } = await this.repository.save(item);
    return this.get(id);
  }

  public async list(): Promise<SeatingPlanEntity[]> {
    return await this.repository.find();
  }

  public async get(id: string): Promise<SeatingPlanEntity> {
    return await this.repository.findOneOrFail(id);
  }

  public async update(
    id: string,
    itemUpdated: SeatingPlanEntity,
  ): Promise<SeatingPlanEntity> {
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
