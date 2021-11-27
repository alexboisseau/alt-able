import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/database/entities';
import { Repository } from 'typeorm';
import { CreateMenuDto } from 'src/dtos/restaurant-menu';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly repository: Repository<MenuEntity>,
  ) {}

  async createMenu(createMenuDto: CreateMenuDto) {
    const menu = this.repository.create(createMenuDto);
    await this.repository.save(menu);

    return menu;
  }

  async getMenus() {
    const result = await this.repository.find({ relations: ['dishes'] });

    const availablesMenu = result.filter((menu) => {
      let result = true;

      menu.dishes.forEach((dish) => {
        if (dish.quantity === 0) {
          result = false;
          return;
        }
      });

      return result;
    });

    return availablesMenu;
  }
}
