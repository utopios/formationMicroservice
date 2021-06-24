import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options : {
      host: "127.0.0.1",
      port: 3001
    }
  })
  app.listen(() => {console.log("payment Connected")})
}
bootstrap();
