import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from 'configs/config';
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
