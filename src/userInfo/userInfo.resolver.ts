import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql'
import { UserInfoService } from './userInfo.service'
import { UserInfoUpdate } from '../graphql'
import { PubSub } from 'graphql-subscriptions'

const pubSub = new PubSub()

@Resolver('UserInfo')
export class UserInfoResolver {
  constructor(private userInfoService: UserInfoService) {}

  @Mutation('updateUserInfo')
  async updateUserInfo(
    @Args('userId') userId: string,
    @Args('updateItems') updateItems: UserInfoUpdate,
  ) {
    const result = await this.userInfoService.update(userId, { ...updateItems })
    await pubSub.publish('userInfoUpdated', { id: userId, ...updateItems })
    return result.affected
  }

  @Subscription('userInfoUpdated', {
    resolve: value => value,
  })
  userInfoUpdated() {
    return pubSub.asyncIterator('userInfoUpdated')
  }
}
