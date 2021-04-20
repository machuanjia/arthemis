/*
 * @Author: D.Y
 * @Date: 2021-04-20 14:12:49
 * @LastEditTime: 2021-04-20 14:13:31
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/project/project.entity.ts
 * @Description:
 */
export interface Project {
  _id?: string;

  name?: string;

  description?: string;

  state?: number;

  position?: number;

  created_at?: number;

  user?: any;
}
