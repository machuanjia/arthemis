/*
 * @Author: D.Y
 * @Date: 2021-04-16 16:06:45
 * @LastEditTime: 2021-04-29 10:33:07
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/main.ts
 * @Description:
 */
// /*
//  * @Author: D.Y
//  * @Date: 2021-04-14 10:00:46
//  * @LastEditTime: 2021-04-29 09:54:22
//  * @LastEditors: D.Y
//  * @FilePath: /arthemis/src/main.ts
//  * @Description:
//  */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './core/res.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NotFoundExceptionFilter } from './middleware/file.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.enableCors();
  app.setGlobalPrefix('api/arthemis');
  app.useStaticAssets(join(__dirname, '../public'));
  app.useGlobalInterceptors(app.get(ResponseInterceptor));
  const options = new DocumentBuilder()
    .setTitle('Arthemis-Api')
    .setDescription('Arthemis server apis')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3600);
  console.log('http://localhost:3600/api-docs');
}
bootstrap();
