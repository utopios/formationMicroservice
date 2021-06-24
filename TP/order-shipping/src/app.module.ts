import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryService } from './services/history.service';
import { KafkaService } from './services/kafka.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, KafkaService, HistoryService],
})
export class AppModule {}
