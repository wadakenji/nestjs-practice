import { Connection, Repository } from 'typeorm'
import { UserInfo } from './userInfo.entity'

export const userInfoProviders = [
  {
    provide: 'USER_INFO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(UserInfo),
    inject: ['DATABASE_CONNECTION'],
  },
]
