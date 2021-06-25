import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistryService } from './service/registry.service';
import {EtcdModule} from "nestjs-etcd"
@Module({
  imports: [
    EtcdModule.forRoot({
      name:"api-register",
      hosts :'http://etcd:2379'
    })
  ],
  controllers: [AppController],
  providers: [AppService, RegistryService],
})
export class AppModule {}
