/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:10:35
 * @LastEditTime: 2021-04-20 16:16:32
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/project.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ScrumController } from './scrum.controller';
import { ScrumService } from './scrum.service';

@Module({
  controllers: [ProjectController, ScrumController],
  providers: [ProjectService, ScrumService],
})
export class ProjectModule {}
