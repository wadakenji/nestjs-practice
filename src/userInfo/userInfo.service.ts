import { Injectable, Inject } from '@nestjs/common'
import { Repository, UpdateResult } from 'typeorm'
import { UserInfo } from './userInfo.entity'
import { UserInfoInput } from '../graphql'

@Injectable()
export class UserInfoService {
  constructor(
    @Inject('USER_INFO_REPOSITORY')
    private userInfoRepository: Repository<UserInfo>,
  ) {}

  async findAll(): Promise<UserInfo[]> {
    return this.userInfoRepository.find()
  }

  async update(
    userId: string,
    updateItems: UserInfoInput,
  ): Promise<UpdateResult> {
    return this.userInfoRepository.update(userId, updateItems)
  }
}
