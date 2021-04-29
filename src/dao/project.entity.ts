import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:12:49
 * @LastEditTime: 2021-04-29 10:50:29
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/dao/project.entity.ts
 * @Description:
 */
export class Project {
  _id?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  state?: number;

  @ApiProperty()
  position?: number;

  @ApiProperty()
  created_at?: number;

  @ApiProperty()
  user?: any;
}
