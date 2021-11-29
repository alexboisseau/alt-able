import { CreateRestaurantSeatingPlanDto } from 'src/dtos';
import camelCase from 'camelcase';
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
    await this.closeSeatingPlan();

    const { id } = await this.repository.save(item);

    return this.get(id);
  }

  async closeSeatingPlan() {
    const activeSeatingPlan = await this.repository.findOne({
      where: { isActive: true },
    });
    if (activeSeatingPlan) {
      activeSeatingPlan.isActive = false;
      await this.repository.save(activeSeatingPlan);
    }
  }

  public async list(): Promise<SeatingPlanEntity[]> {
    let query = this.repository.createQueryBuilder('entity');

    query = this.loadRelations(query, ['tables']);
    return query.getMany();
  }

  public async get(id: string): Promise<SeatingPlanEntity> {
    let query = this.repository.createQueryBuilder('entity');

    query = this.loadRelations(query, ['tables']);
    query = query.where('entity.id = :id', { id });

    return query.getOneOrFail();
  }

  async getLastSeatingPlan() {
    return this.repository.findOne({ order: { createdAt: 'DESC' } });
  }

  async getActiveSeatingPlan() {
    return this.repository.findOne({ where: { isActive: true } });
  }

  async setCurrentSeatingPlan() {
    let currentActivePlan = await this.getActiveSeatingPlan();
    if (!currentActivePlan) {
      currentActivePlan = await this.getLastSeatingPlan();
      if (currentActivePlan) {
        currentActivePlan.isActive = true;
        this.repository.save(currentActivePlan);
      }
    }

    return currentActivePlan;
  }

  public async update(
    id: string,
    itemUpdated: SeatingPlanEntity,
  ): Promise<SeatingPlanEntity> {
    let item = await this.repository.findOneOrFail(id);
    item = { ...itemUpdated, id };

    await this.repository.save(item);

    return item;
  }

  public async destroy(id: string): Promise<void> {
    const item = await this.repository.findOneOrFail(id);
    await this.repository.remove(item);
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
