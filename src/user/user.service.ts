/*
 * @Author: D.Y
 * @Date: 2021-04-16 19:19:42
 * @LastEditTime: 2021-04-17 09:13:56
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/user/user.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { UserSchema } from 'src/db/schema/user.schema';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema)
    private readonly userModel: ReturnModelType<typeof UserSchema>,
  ) {}

  async createUser(dao: User): Promise<User> {
    return await this.userModel.create(dao);
  }

  async getUserDetail(_id: string) {
    return await this.userModel.findById(_id);
  }

  async updateUser(_id: string, dao: User) {
    await this.userModel.findByIdAndUpdate(_id, dao);
    return await this.userModel.findById(_id);
  }

  async deleteUser(_id: string) {
    await this.userModel.findByIdAndDelete(_id);
    return true;
  }

  async getUsers() {
    return this.userModel.find();
  }
}
