import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { DishModule } from './menu/dish/dish.module';
import { RestaurantTableModule } from './restaurant/tables/table.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      expandVariables: true,
    }),
    DatabaseModule,
    DishModule,
    RestaurantTableModule,
  ],
})
export class AppModule {}
