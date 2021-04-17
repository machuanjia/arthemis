/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:48:18
 * @LastEditTime: 2021-04-17 11:18:49
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/schema/user.schema.ts
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsString } from 'class-validator';
import { hashSync } from 'bcryptjs';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserSchema {
  @IsString()
  @prop({ required: true })
  username: string;

  @IsString()
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;
}
