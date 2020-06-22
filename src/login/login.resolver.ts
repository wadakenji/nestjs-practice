import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { LoginService } from './login.service'

@Resolver('Login')
export class LoginResolver {
  constructor(private loginService: LoginService) {}

  @Mutation('login')
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    console.log('login')
    const loginRow = await this.loginService.findByUsername(username)
    if (!loginRow) return 'invalid username'
    if (loginRow.password !== password) return 'invalid password'
    return 'logged in'
  }
}
