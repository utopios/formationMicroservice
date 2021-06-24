import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name : "ORDER",
      options:{
        host: "order",
        port:3000
      },
      transport:Transport.TCP
    },
    {
      name : "PAYMENT",
      options:{
        host: "payment",
        port:3001
      },
      transport:Transport.TCP
    },
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
