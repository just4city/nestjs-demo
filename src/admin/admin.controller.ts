import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { get } from 'http';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get('/')
  async findAll() {
    const result = await this.adminService.findAll();
    console.log(result);
  }
}
