import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TaskSchema } from './schema/task.schema';

const models = TypegooseModule.forFeature([TaskSchema]);

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
