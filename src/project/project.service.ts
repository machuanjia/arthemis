/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:11:22
 * @LastEditTime: 2021-04-20 14:17:53
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/project.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ProjectSchema } from 'src/db/schema/project.schema';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {
  private subPosition = Math.pow(2, 10);
  constructor(
    @InjectModel(ProjectSchema)
    private readonly projectModel: ReturnModelType<typeof ProjectSchema>,
  ) {}

  async createProject(dao: Project) {
    // dao.position = this.subPosition;
    return await this.projectModel.create(dao);
  }

  async updateProject(_id: string, dao: Project) {
    await this.projectModel.findByIdAndUpdate(_id, dao);
  }
}
