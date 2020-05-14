import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisService } from 'nestjs-redis';
import { Admins } from '../entity/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admins)
    private readonly adminsRepository: Repository<Admins>,
    private readonly redisService: RedisService,
  ) {}

  findAll(): Promise<Admins[]> {
    return this.adminsRepository.find();
  }

  async test() {
    const client = await this.redisService.getClients();
    console.log(client);
    return true;
  }
}
