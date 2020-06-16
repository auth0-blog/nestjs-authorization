// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public-hello')
  getPublicHello(): string {
    return this.appService.getPublicHello();
  }

  @Get('protected-hello')
  getProtectedHello(): string {
    return this.appService.getProtectedHello();
  }

  @Get('admin-hello')
  getAdminHello(): string {
    return this.appService.getAdminHello();
  }
}
