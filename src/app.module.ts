import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

import { DatabaseModule } from './database/database.module';
import { DishModule } from './restaurant-menu/dish/dish.module';
import { MenuModule } from './restaurant-menu/menu/menu.module';
import { RestaurantMenuModule } from './restaurant-menu/restaurant-menu.module';
import { RestaurantServiceModule } from './restaurant/restaurant-service/restaurant-service.module';
import { RestaurantSeatingPlanModule } from './restaurant/seatingPlan/seatingPlan.module';
import { RestaurantTableModule } from './restaurant/tables/table.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      expandVariables: true,
    }),
    DatabaseModule,
    AuthModule,
    DishModule,
    MenuModule,
    RestaurantMenuModule,
    RestaurantTableModule,
    RestaurantSeatingPlanModule,
    RestaurantServiceModule,
  ],
})
export class AppModule {}
