// src/app.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPublicHello(): string {
    return 'Hello World!\n';
  }

  getProtectedHello(): string {
    return 'Hello Authenticated User!\n';
  }

  getAdminHello(): string {
    return 'Hello Admin User!\n';
  }
}
