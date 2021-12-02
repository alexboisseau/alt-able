import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigService } from 'configs/config';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt-strategy';
import { AuthService } from './services/auth.service';
import { CitizenService } from './services/user.service';

@Module({
  imports: [
    HttpModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.jwtSecret,
        signOptions: { expiresIn: '8h' },
      }),
    }),
  ],
  providers: [AuthService, CitizenService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
