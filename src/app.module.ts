import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'configs/config';
import { DatabaseConfig } from 'configs/config.interface';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: '.env',
      expandVariables: true,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
