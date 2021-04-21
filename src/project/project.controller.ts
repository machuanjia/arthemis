/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:10:50
 * @LastEditTime: 2021-04-20 16:52:30
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/project.controller.ts
 * @Description:
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createUser(@Req() req: Request, @Body() dto: Project) {
    return this.projectService.createProject(dto);
  }

  @Get(':_id')
  async getUserDetail(@Req() req: Request, @Param('_id') _id: string) {
    return this.projectService.getProjectDetail(_id);
  }

  @Put(':_id')
  async updateUser(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dao: Project,
  ) {
    return this.projectService.updateProject(_id, dao);
  }

  @Delete(':_id')
  async deleteUser(@Req() req: Request, @Param('_id') _id: string) {
    return this.projectService.deleteProject(_id);
  }

  @Get()
  async getUsers(
    @Req() req: Request,
    @Query('keyword') keyword: string,
    @Query('pi') pi: number,
    @Query('ps') ps: number,
  ) {
    return this.projectService.getProjects(keyword, pi, ps);
  }
}
