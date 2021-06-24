import { Controller, Get, Param, Req } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AxiosController {
  constructor(private readonly appService: AppService) {}


  @Get('/order-payment/:id')
  get(@Param() params, @Req() request) {
    return axios.get(`http://localhost:3005/${params.id}`, {headers:request.headers})
  }
}
