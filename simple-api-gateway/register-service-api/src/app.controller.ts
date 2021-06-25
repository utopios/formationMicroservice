import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RegistryService } from './service/registry.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private registryService:RegistryService) {}

  @Get('/resolve/:name')
  resolveName(@Param() params) {
      return this.registryService.resolveAddress(params.name)
  }

  @Post('/register')
  registerService(@Body() data) {
    return this.registryService.register(data)
  }
}
