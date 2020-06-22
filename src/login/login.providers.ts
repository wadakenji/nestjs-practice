import { Connection, Repository } from 'typeorm'
import { Login } from './login.entity'

export const loginProviders = [
  {
    provide: 'LOGIN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Login),
    inject: ['DATABASE_CONNECTION'],
  },
]
