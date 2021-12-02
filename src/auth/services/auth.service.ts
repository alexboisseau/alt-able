import { BadRequestException, HttpService, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import type { UserDto, TokenDto } from '../../dtos/auth';
import { pbkdf2Sync } from 'crypto';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';

import { AccountEntity } from 'src/database/entities/auth';

import { ConfigService } from 'configs/config';

@Injectable()
export class AuthService {
  public constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
  ) {}

  public async register(
    email: string,
    password: string,
    id: string,
  ): Promise<void> {
    const hashedPassword = this.hashPassword(password);

    const account = { email, password: hashedPassword };
    await this.accountRepository.save(account);
  }

  public async login(email: string, password: string): Promise<TokenDto> {
    const user = await this.accountRepository.findOneOrFail({
      where: { email },
    });

    const hashedPassword = this.hashPassword(password);
    if (user.password !== hashedPassword) {
      throw new BadRequestException();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, id, ...trimmedUser } = user;

    const { data: citizen } = await firstValueFrom(
      this.httpService.get<UserDto | undefined>(`/users/${id}`),
    );

    const content = { ...trimmedUser, citizen };

    return { token: this.jwtService.sign(content) };
  }

  private hashPassword(password: string): string {
    const hash = pbkdf2Sync(
      password,
      this.configService.salt,
      100_000,
      64,
      'sha512',
    );

    return hash.toString('hex');
  }
}
