/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-16 19:14:17
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/user.schema.ts
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserSchema {
  @IsString()
  @prop({ required: true })
  name: string;

  @IsString()
  @prop()
  password: string;
}
