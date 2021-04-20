/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:10:35
 * @LastEditTime: 2021-04-20 14:11:08
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/project.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
