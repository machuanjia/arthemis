/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-21 16:25:33
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/task.schema.ts
 * @Description:
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { ProjectSchema } from './project.schema';
import { UserSchema } from './user.schema';
import { ScrumSchema } from './scrum.schema';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class TaskSchema {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsString()
  @prop()
  description: string;

  @IsNumber()
  @prop()
  type: number;

  @IsNumber()
  @prop()
  state: number;

  @IsNumber()
  @prop()
  important: number;

  @IsNumber()
  @prop()
  urgent: number;

  @IsNumber()
  @prop()
  tomato: number;

  @IsNumber()
  @prop({ required: true })
  position: number;

  @IsString()
  @prop({ required: true })
  group: string;

  @prop({ ref: 'UserSchema' })
  charger: Ref<UserSchema>;

  @prop({ ref: 'UserSchema' })
  user: Ref<UserSchema>;

  @prop({ ref: 'ScrumSchema' })
  scrum: Ref<ScrumSchema>;

  @prop({ ref: 'ProjectSchema' })
  project: Ref<ProjectSchema>;

  //   @prop()
  //   accountId: string;

  //   @prop()
  //   staffId: string;
}
