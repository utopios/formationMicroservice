import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import axios from "axios"
import { KafkaService } from './services/kafka.service';
import { ResolverService } from './services/resolver.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private kafkaService: KafkaService, private resolverService:ResolverService) {}

  // @Get('/app-1')
  // async getApp1() {
  //   const result = await axios.get('http://localhost:3001/')
  //   return result.data
  // } 
  // @Get('/app-2')
  // async getApp2() {
  //   const result = await axios.get('http://localhost:3002/')
  //   return result.data
  // }

  // @Post('/app-1')
  // async postApp1(@Body() data:any) {
  //   const result = await axios.post('http://localhost:3001', {...data})
  //   return result.data
  // }

  // @Post('/app-2')
  // async postApp2(@Body() data:any, @Req() request: Request) {
  //   const result = await axios.post('http://localhost:3002', {...data}, {headers : request.headers})
  //   return result.data
  // }

  @Get(':api')
  async getApi(@Param() params) {
      const url = await this.resolverService.resolve(params.api)
      const result = await axios.get(url)
      console.log(params.api)
      return result.data
  }

  @Get('/test/:api')
  async getTest(@Param() params) {
    const url = await this.resolverService.resolve(params.api)
      return url
  }

  @Post(':api')
  async postApi(@Param() params, @Body() data:any) {
        const url = await this.resolverService.resolve(params.api)
      const result = await axios.post(url, data)
      return result.data
  }
}
