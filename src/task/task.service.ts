/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:23:55
 * @LastEditTime: 2021-04-21 16:35:30
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/task/task.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { TaskSchema } from '../db/schema/task.schema';
import { Task } from './task.entity';
import { maxBy } from 'lodash';
import { TomatoSummarySchema } from 'src/db/schema/tomato.summary.schema';

@Injectable()
export class TaskService {
  private subPosition = Math.pow(2, 10);
  constructor(
    @InjectModel(TaskSchema)
    private readonly taskModel: ReturnModelType<typeof TaskSchema>,
    @InjectModel(TomatoSummarySchema)
    private readonly taskSummaryModel: ReturnModelType<
      typeof TomatoSummarySchema
    >,
  ) {}
  async createTask(dao: Task): Promise<Task> {
    const groups = await this.taskModel.find({ group: dao.group });
    const max = maxBy(groups, 'position');
    if (max) {
      dao.position = max.position * 2;
    } else {
      dao.position = this.subPosition;
    }
    return await this.taskModel.create(dao);
  }

  async getTaskDetail(_id: string): Promise<Task> {
    return await this.taskModel.findById(_id).populate('user');
  }

  async sortTask(
    _id: string,
    info: {
      fromId;
      toId;
      oldIndex;
      newIndex;
    },
  ): Promise<boolean> {
    let position = 0;
    const task = await this.taskModel.findById(_id);
    const toTasks = await this.taskModel.find({
      group: info.toId,
    });
    if (toTasks.length === 0) {
      position = this.subPosition;
    } else {
      if (info.newIndex === 0) {
        position = toTasks[0].position / 2;
      } else if (info.newIndex === toTasks.length - 1) {
        position = toTasks[info.newIndex - 1].position + this.subPosition;
      } else {
        position =
          toTasks[info.newIndex - 1].position +
          (toTasks[info.newIndex].position -
            toTasks[info.newIndex - 1].position) /
            2;
      }
    }

    await this.taskModel.findOneAndUpdate(
      {
        _id,
      },
      {
        position,
        group: info.toId,
      },
    );
    return true;
  }

  async updateTask(_id: string, dto: Task): Promise<Task> {
    await this.taskModel.findOneAndUpdate({ _id }, dto);
    return await this.taskModel.findById(_id).populate('user');
  }

  async deleteTask(_id: string): Promise<boolean> {
    await this.taskModel.findByIdAndDelete(_id);
    return true;
  }

  async getTasks(
    start: number,
    end: number,
    important: number,
    urgent: number,
    state: number,
    scrum: string,
  ): Promise<Task[]> {
    let options = {};
    if (start && end) {
      options = {
        $and: [
          { createdAt: { $gt: new Date(start * 1000) } },
          { createdAt: { $lt: new Date(end * 1000) } },
        ],
      };
    }
    important != undefined &&
      (options = Object.assign({}, options, {
        important,
      }));
    urgent != undefined &&
      (options = Object.assign({}, options, {
        urgent,
      }));
    state != undefined &&
      (options = Object.assign({}, options, {
        state,
      }));

    scrum &&
      (options = Object.assign({}, options, {
        scrum,
      }));

    return await this.taskModel.find(options).populate([
      {
        path: 'charger',
      },
      {
        path: 'user',
      },
    ]);
  }
  async updateTaskSummary(summary: { content: string; dateNumber: number }) {
    const sum = await this.taskSummaryModel.findOne({
      dateNumber: summary.dateNumber,
    });
    if (sum) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.taskSummaryModel.findByIdAndUpdate(sum._id, {
        content: summary.content,
      });
    } else {
      await this.taskSummaryModel.create({
        content: summary.content,
        dateNumber: summary.dateNumber,
      });
    }
    return true;
  }
  async getTaskSummary(dateNumber: number) {
    return await this.taskSummaryModel.findOne({ dateNumber });
  }
}
