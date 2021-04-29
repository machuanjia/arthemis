/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:10:50
 * @LastEditTime: 2021-04-29 15:46:33
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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Project } from '../dao/project.entity';
import { ProjectService } from './project.service';

@Controller('projects')
@ApiTags('项目')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createUser(@Req() req: Request, @Body() dto: Project) {
    return this.projectService.createProject(dto);
  }

  @Get(':_id')
  async getUserDetail(@Req() req: Request, @Param('_id') _id: string) {
    return this.projectService.getProjectDetail(_id);
  }

  @Put(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async updateUser(
    @Req() req: Request,
    @Param('_id') _id: string,
    @Body() dao: Project,
  ) {
    return this.projectService.updateProject(_id, dao);
  }

  @Delete(':_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteUser(@Req() req: Request, @Param('_id') _id: string) {
    return this.projectService.deleteProject(_id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getUsers(
    @Req() req: Request,
    @Query('keyword') keyword: string,
    @Query('pi') pi: number,
    @Query('ps') ps: number,
  ) {
    return this.projectService.getProjects(keyword, pi, ps);
  }
}
