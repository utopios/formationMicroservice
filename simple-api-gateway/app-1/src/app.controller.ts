import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/healthy')
  healthyCheck() {
    return "OK"
  }
  @Get('/healthyStong')
  healthyCheckStong() {
    return "OK"
  }
}
