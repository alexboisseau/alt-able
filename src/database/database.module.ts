import { Global, Module } from '@nestjs/common';
import { ConfigService } from '../../configs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Entities from './entities';
import { ConfigModule } from '../../configs/config.module';

const entities = Object.values(Entities);
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.databaseConfiguration,
        ...entities,
      }),
    }),
    TypeOrmModule.forFeature(entities),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
