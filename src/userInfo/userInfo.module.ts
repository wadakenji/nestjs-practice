import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userInfoProviders } from './userInfo.providers';
import { UserInfoService } from './userInfo.service';
import { UserInfoResolver } from './userInfo.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userInfoProviders,
    UserInfoService,
    UserInfoResolver
  ],
})
export class UserInfoModule {}