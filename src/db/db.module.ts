/*
 * @Author: D.Y
 * @Date: 2021-04-14 11:17:08
 * @LastEditTime: 2021-04-19 11:47:45
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/db/db.module.ts
 * @Description:
 */
import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TaskSchema } from './schema/task.schema';
import { TomatoSummarySchema } from './schema/tomato.summary.schema';
import { UserSchema } from './schema/user.schema';

const models = TypegooseModule.forFeature([
  TaskSchema,
  TomatoSummarySchema,
  UserSchema,
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: 'mongodb://127.0.0.1:27017/arthemis',
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        };
      },
    }),
    models,
  ],
  exports: [models],
})
export class DbModule {}
