import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseConfig } from 'configs/config.interface';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig = configService.get<DatabaseConfig>('database');

        return {
          type: 'postgres',
          synchronize: true,
          ...databaseConfig,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
