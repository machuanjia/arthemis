/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:12:49
 * @LastEditTime: 2021-04-20 16:51:43
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/scrum.entity.ts
 * @Description:
 */
export interface Scrum {
  _id?: string;

  name?: string;

  description?: string;

  state?: number;

  position?: number;

  groups?: any;

  created_at?: number;

  user?: any;

  project?: any;
}
