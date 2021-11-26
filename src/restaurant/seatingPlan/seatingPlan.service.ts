import { CreateRestaurantSeatingPlanDto } from 'src/dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeatingPlanEntity } from 'src/database/entities';

import { Repository } from 'typeorm';

@Injectable()
export class RestaurantSeatingPlanService {
  constructor(
    @InjectRepository(SeatingPlanEntity)
    private readonly repository: Repository<SeatingPlanEntity>,
  ) {}

  public async create(item: CreateRestaurantSeatingPlanDto) {
    const result = this.repository.create(item);
    return await this.repository.save(result);
  }

  public async list() {
    return await this.repository.find();
  }

  public async get(id: string) {
    return await this.repository.findOneOrFail(id);
  }
}
