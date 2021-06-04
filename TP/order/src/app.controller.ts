import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderInterface } from './interfaces/order.interface';
import { KafkaService } from './services/kafka.service';
import { OrderService } from './services/order.service';
import { TOPIC_ORDER_CREATED } from './tools/const.topic';

@Controller()
export class AppController {
  constructor(private readonly orderService: OrderService, private kafkaService:KafkaService) {}

  @Post()
  postOrder(@Body() order : OrderInterface) {
      //par facilité pour le tp
      order.status = "CREATED"
      this.orderService.create(order).then(res => {
        const dataSend = {...order, id:res.id}
        this.kafkaService.producer.send({topic : String(TOPIC_ORDER_CREATED), messages : [{key : dataSend.id, value : JSON.stringify(dataSend)}]})
      })
  }
}
