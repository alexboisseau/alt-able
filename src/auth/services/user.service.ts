import { HttpService, Injectable } from '@nestjs/common';
import type { UserDto, CreateUserDto } from '../../dtos/auth';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CitizenService {
  public constructor(private readonly httpService: HttpService) {}

  public async create(dto: CreateUserDto): Promise<UserDto> {
    const response = await firstValueFrom(this.httpService.post('/users', dto));

    return response.data;
  }
}
