/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-21 09:14:42
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/scrum.schema.ts
 * @Description:
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { ProjectSchema } from './project.schema';
import { UserSchema } from './user.schema';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ScrumSchema {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsString()
  @prop()
  description: string;

  @IsNumber()
  @prop()
  state: number;

  @prop()
  groups: { _id: any; name: string; type: number }[];

  @prop({ ref: 'UserSchema' })
  user: Ref<UserSchema>;

  @prop({ ref: 'ProjectSchema', required: true })
  project: Ref<ProjectSchema>;

  //   @prop()
  //   accountId: string;

  //   @prop()
  //   staffId: string;
}
