import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import {map} from "rxjs/operators"
import { zip } from 'rxjs';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject("M1") private clientM1: ClientProxy, @Inject("M2") private clientM2: ClientProxy) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  private requestM1() {
    return this.clientM1.send('/',null)
  }
  private requestM2() {
    return this.clientM2.send('/',null)
  }
  @Get('/m1m2')
  getAll() {
    //return this.clientM1.send(null,null).pipe(map(res => {}))
    return zip(this.requestM1(),this.requestM2()).pipe(map(([responseM1, responseM2]) => ({
      //Object de reponse
      responseM1, responseM2
    })))
  }
}
