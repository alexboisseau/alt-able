import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import type { JwtDto } from 'src/dtos/auth';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from 'configs/config';

type LoggedUserDto = Omit<JwtDto, 'exp' | 'iat'>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.jwtSecret,
    });
  }

  public async validate(payload: JwtDto): Promise<LoggedUserDto> {
    const { iat, exp, ...result } = payload;

    return result;
  }
}
