/*
 * @Author: D.Y
 * @Date: 2021-04-17 11:22:35
 * @LastEditTime: 2021-04-17 11:51:03
 * @LastEditors: D.Y
 * @FilePath: /arthemis/src/auth/auth.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: '11111111',
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
