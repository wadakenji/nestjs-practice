import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { StaffModule } from './staff/staff.module'
import { LoginModule } from './login/login.module'
import { UserInfoModule } from './userInfo/userInfo.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      installSubscriptionHandlers: true,
      playground: true,
    }),
    UserInfoModule,
    UserModule,
    StaffModule,
    LoginModule,
  ],
})
export class AppModule {}
