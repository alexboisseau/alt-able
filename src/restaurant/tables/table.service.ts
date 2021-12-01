import { CreateRestaurantTableDto, InstallCustomerDto } from 'src/dtos';
import camelCase from 'camelcase';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableEntity } from 'src/database/entities';

import { In, Repository, SelectQueryBuilder } from 'typeorm';

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
    await this.repository.save(table);

    return table;
  }

  public async installCustomers(installCustomerDto: InstallCustomerDto) {
    const table: TableEntity = await this.get(installCustomerDto.id);

    // Check that the number is positiv
    if (installCustomerDto.customersNumber < 1)
      throw new Error('Sorry but the customersNumber cannot be less than 1');
    // Check that the table is free
    // Check that the customersNumber is not greater than capacity table
    // Check that a service is started
  }

  public async list(): Promise<TableEntity[]> {
    let query = this.repository.createQueryBuilder('entity');

    query = this.loadRelations(query, ['seatingPlans']);
    return query.getMany();
  }

  public async get(id: string): Promise<TableEntity> {
    let query = this.repository.createQueryBuilder('entity');

    query = this.loadRelations(query, ['seatingPlans']);
    query = query.where('entity.id = :id', { id });

    return query.getOneOrFail();
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
