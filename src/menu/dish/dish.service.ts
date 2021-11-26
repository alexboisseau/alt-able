import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishEntity } from 'src/database/entities';
import { CreateDishDto } from 'src/dtos';
import { Repository } from 'typeorm';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(DishEntity)
    private readonly repository: Repository<DishEntity>,
  ) {}

  public async create(createDishDto: CreateDishDto) {
    // Check that no one dish with the same name exists
    const result = await this.repository.find({
      where: { name: createDishDto.name },
    });

    if (result.length > 0) {
      return false;
    }

    const dish = this.repository.create(createDishDto);
    await this.repository.save(dish);

    return dish;
  }

  public async getDishes() {
    return this.repository.find();
  }
}
