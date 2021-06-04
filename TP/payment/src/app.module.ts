import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Payment, PaymentSchema } from './models/payment.model';
import { KafkaService } from './services/kafka.service';
import { PaymentService } from './services/payment.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:2707'),
  MongooseModule.forFeature([
    {name: Payment.name, schema : PaymentSchema}
  ])],
  controllers: [AppController],
  providers: [PaymentService, KafkaService],
})
export class AppModule {}
