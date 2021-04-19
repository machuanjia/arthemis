/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:00:46
 * @LastEditTime: 2021-04-19 17:45:50
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './core/res.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';
import { NotFoundExceptionFilter } from './middleware/file.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('/', join(__dirname, '..', 'public'));
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useStaticAssets(join(__dirname, '../public'));
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.enableCors();
  app.setGlobalPrefix('api/arthemis');
  app.useGlobalInterceptors(app.get(ResponseInterceptor));
  await app.listen(3600);
}
bootstrap();
