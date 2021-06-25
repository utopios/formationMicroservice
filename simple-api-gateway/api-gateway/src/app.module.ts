import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaService } from './services/kafka.service';
import { ResolverService } from './services/resolver.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KafkaService, ResolverService],
})
export class AppModule {}
