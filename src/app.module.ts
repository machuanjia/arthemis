/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:00:46
 * @LastEditTime: 2021-05-06 16:24:28
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/app.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { ResponseInterceptor } from './core/res.interceptor';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { GraphModule } from './graph/graph.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    DbModule,
    TaskModule,
    UserModule,
    AuthModule,
    ProjectModule,
    GraphModule,
  ],
  controllers: [AppController],
  providers: [AppService, ResponseInterceptor],
})
export class AppModule {}
