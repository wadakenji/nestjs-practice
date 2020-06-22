import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Login } from './login.entity';

@Injectable()
export class LoginService {
  constructor(
    @Inject('LOGIN_REPOSITORY')
    private loginRepository: Repository<Login>,
  ) {}

  async findAll(): Promise<Login[]> {
    return this.loginRepository.find();
  }

  async findByUsername(username: string): Promise<Login> {
    return this.loginRepository.findOne({where: {username: username}})
  }
}