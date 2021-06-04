import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Order, OrderShema } from './models/order.model';
import { KafkaService } from './services/kafka.service';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:2707'),
    MongooseModule.forFeature([
      {name: Order.name, schema : OrderShema}
    ])
  ],
  controllers: [AppController],
  providers: [KafkaService, OrderService],
})
export class AppModule {}
