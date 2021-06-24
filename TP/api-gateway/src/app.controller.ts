import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('ORDER-SHIPPING') private orderPaymentClient : ClientProxy) {}

  @Get('/orderShipping/:id')
  getOrder(@Param() params) {
    const pattern = {cmd:'order-shipping'}
    const payload = {orderId : params.id}
    return this.orderPaymentClient.send(pattern,payload)
  }
}
