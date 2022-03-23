import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
export const app = async (expressInstance?) => {
  const appServer = await NestFactory.create(
    AppModule,
    expressInstance ? new ExpressAdapter(expressInstance) : undefined,
  );
  return appServer;
};
