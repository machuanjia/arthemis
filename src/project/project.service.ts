/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:11:22
 * @LastEditTime: 2021-04-20 16:08:55
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/project.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { PAGINATION } from 'src/constant';
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

  async getProjectDetail(_id: string) {
    return await this.projectModel.findById(_id);
  }

  async updateProject(_id: string, dao: Project) {
    await this.projectModel.findByIdAndUpdate(_id, dao);
  }

  async deleteProject(_id: string) {
    await this.projectModel.findByIdAndDelete(_id);
    return true;
  }

  async getProjects(keyword, pi, ps) {
    const findOptions = {};
    let regexp = '';
    const pageIndex = parseInt(pi || 0);
    const pageSize = parseInt(ps || PAGINATION.SIZE);

    if (keyword) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      regexp = new RegExp(keyword, 'i');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      findOptions.$and = [{ name: { $regex: regexp } }];
    }

    const total = await this.projectModel
      .find(findOptions)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .count();

    const users = await this.projectModel
      .find(findOptions)
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .sort({ _id: -1 });
    return {
      page: pageIndex,
      total: total,
      data: users,
    };
  }
}
