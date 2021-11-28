import { Injectable } from '@nestjs/common';
import camelCase from 'camelcase';
import { InjectRepository } from '@nestjs/typeorm';
import { DishEntity } from 'src/database/entities';
import { CreateDishDto, UpdateDishDto } from 'src/dtos';
import { MoreThan, Repository, SelectQueryBuilder } from 'typeorm';

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
    let query = this.repository.createQueryBuilder('entity');

    query = this.loadRelations(query, ['seatingPlans']);
    return query.getMany();
  }

  public async getDish(id: string): Promise<DishEntity> {
    let query = this.repository.createQueryBuilder('entity');

    query = this.loadRelations(query, ['ingredients']);
    query = query.where('entity.id = :id', { id });

    return query.getOneOrFail();
  }

  public async update(id, updateDishDto: UpdateDishDto) {
    const dish = this.repository.findOne({
      where: { id: id },
    });

    if (!dish) {
      return false;
    }

    this.repository.update(id, updateDishDto);
    return dish;
  }

  public async getAvailableDishes() {
    return this.repository.find({ where: { quantity: MoreThan(0) } });
  }

  protected loadRelations<T>(
    query: SelectQueryBuilder<T>,
    relations: string[],
  ): SelectQueryBuilder<T> {
    let modifiedQuery = query;

    relations.forEach((relation) => {
      const [selectedRelation, alias] = this.parsePropertyPath(relation);

      modifiedQuery = modifiedQuery.leftJoinAndSelect(selectedRelation, alias);
    });

    return modifiedQuery;
  }

  protected parsePropertyPath(path: string): [string, string] {
    const alias = camelCase(path);
    let ormPath: [string, string];
    // eslint-disable-next-line prefer-const
    let [parentRelation, relation] = path.split('.').slice(-2);

    if (relation === undefined) {
      ormPath = [`entity.${parentRelation}`, alias];
    } else {
      const parentAliasArray = path.split('.');
      parentAliasArray.pop();
      const parentAlias = camelCase(parentAliasArray.join('.'));

      ormPath = [`${parentAlias}.${relation}`, alias];
    }

    return ormPath;
  }
}
