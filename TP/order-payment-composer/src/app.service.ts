import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { zip } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable()
export class AppService {
  constructor(@Inject("ORDER") private orderService : ClientProxy, @Inject("PAYMENT") private paymentService : ClientProxy) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  getFromPayment() {
    const pattern = {cmd : "getPayment"}
    const payload = {}
    return this.paymentService.send(pattern, payload)
  }

  getFromOrder() {
    const pattern = {cmd : "getOrder"}
    const payload = {}
    return this.orderService.send(pattern, payload)
  }

  getAll() {
    return zip(this.getFromOrder(), this.getFromPayment()).pipe(map(([responseOrder, responsePayment])=> ({order:responseOrder, payment:responsePayment})))
  }
}
