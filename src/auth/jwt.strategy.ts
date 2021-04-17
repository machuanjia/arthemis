import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { UserSchema } from '../db/schema/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(UserSchema)
    private userModel: ReturnModelType<typeof UserSchema>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '11111111',
    } as StrategyOptions);
  }

  async validate(id) {
    return await this.userModel.findById(id);
  }
}
