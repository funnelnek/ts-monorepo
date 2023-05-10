import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { DiscordServerModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(DiscordServerModule);
  
  const config = app.get(ConfigService);
  const cors = config.get<CorsOptions>("cors");
  const prefix = config.get<string>("API_PREFIX") as string;
  const port: number | undefined = config.get<number>("PORT");

  app.setGlobalPrefix(prefix);
  app.enableCors(cors);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.listen(port || 3000)
  return app;
}