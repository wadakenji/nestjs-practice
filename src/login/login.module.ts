import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { loginProviders } from './login.providers';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...loginProviders,
    LoginService,
    LoginResolver
  ],
})
export class LoginModule {}