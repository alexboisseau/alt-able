import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ServiceEntity } from 'src/database/entities/restaurant/service.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RestaurantServiceService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly repositoryService: Repository<ServiceEntity>,
  ) {}

  async create() {
    await this.closeService();

    const service = this.repositoryService.create();

    await this.repositoryService.save(service);

    return service;
  }

  async closeService() {
    const activeService = await this.repositoryService.findOne({
      where: { isDone: false },
    });
    if (activeService) {
      activeService.isDone = true;
      await this.repositoryService.save(activeService);
    }
  }

  async getActiveService() {
    return !!(await this.repositoryService.findOne({
      where: { isDone: false },
    }));
  }

  getServices() {
    return this.repositoryService.find();
  }
}
