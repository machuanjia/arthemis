import { JwtService } from '@nestjs/jwt';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class AuthController {
    private jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: ReturnModelType<typeof UserSchema>);
    login(dto: any, user: any): Promise<{
        token: string;
    }>;
    user(user: any): Promise<any>;
}
