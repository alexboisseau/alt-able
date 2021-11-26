import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishEntity } from 'src/database/entities';
import { CreateDishDto, UpdateDishDto } from 'src/dtos';
import { Repository } from 'typeorm';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(DishEntity)
    private readonly repository: Repository<DishEntity>,
  ) {}

  public async create(createDishDto: CreateDishDto) {
    const dish = this.repository.create(createDishDto);
    await this.repository.save(dish);

    return dish;
  }

  public async getDishes() {
    return this.repository.find();
  }

  public async update(id, updateDishDto: UpdateDishDto) {
    const dish = this.repository.findOne({
      where: { id: id }
    });

    if(!dish) {
      return 'false';
    }

    this.repository.update(id, updateDishDto);
    return dish;
  }
}
