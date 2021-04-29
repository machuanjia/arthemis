import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: D.Y
 * @Date: 2021-04-14 10:33:09
 * @LastEditTime: 2021-04-29 10:51:21
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/dao/task.entity.ts
 * @Description:
 */
export class Task {
  _id?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  type?: number;

  @ApiProperty()
  state?: number;

  @ApiProperty()
  important?: number;

  @ApiProperty()
  urgent?: number;

  tomato?: number;

  @ApiProperty()
  group?: string;

  @ApiProperty()
  position?: number;

  created_at?: number;

  accountId?: string;

  staffId?: string;

  user?: any;

  @ApiProperty()
  project?: any;

  @ApiProperty()
  scrum?: any;
}
