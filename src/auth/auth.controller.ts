import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AccountDto, CreateUserDto, TokenDto } from '../dtos/auth';

import { AuthService } from './services/auth.service';
import { CitizenService } from './services/user.service';

@Controller('/auth')
export class AuthController {
  public constructor(
    private readonly authService: AuthService,
    private readonly citizenService: CitizenService,
  ) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  public async register(
    @Body() body: CreateUserDto,
    @Body('password') password: string,
  ): Promise<void> {
    const { id } = await this.citizenService.create(body);
    await this.authService.register(body.email, password, id);
  }

  @Post('/login')
  public async login(@Body() body: AccountDto): Promise<TokenDto> {
    const { email, password } = body;

    return this.authService.login(email, password);
  }
}
