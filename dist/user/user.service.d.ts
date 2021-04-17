import { ReturnModelType } from '@typegoose/typegoose';
import { UserSchema } from 'src/db/schema/user.schema';
import { User } from './user.entity';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: ReturnModelType<typeof UserSchema>);
    createUser(dao: User): Promise<User>;
    getUserDetail(_id: string): Promise<import("@typegoose/typegoose").DocumentType<UserSchema>>;
    updateUser(_id: string, dao: User): Promise<import("@typegoose/typegoose").DocumentType<UserSchema>>;
    deleteUser(_id: string): Promise<boolean>;
    getUsers(): Promise<import("@typegoose/typegoose").DocumentType<UserSchema>[]>;
}
