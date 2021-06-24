import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosController } from './axios.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'order-shipping',
        transport: Transport.TCP,
        options:{
          host: 'http://127.0.0.1',
          port: 3011
        }
      }
    ])
  ],
  controllers: [AppController,AxiosController],
  providers: [AppService],
})
export class AppModule {}
