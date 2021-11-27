import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly repository: Repository<MenuEntity>,
  ) {}

  async getMenus() {
    return this.repository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.dishes', 'dish')
      .getMany();
  }
}
