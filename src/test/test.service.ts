import { Injectable } from '@nestjs/common';

const test: string[] = [
  'wada',
  'sogawa',
  'oka',
  'duka'
]

@Injectable()
export class TestService {
  private readonly members: string[] = test;

  create(member: string): void {
    this.members.push(member);
  }

  findAll(): string[] {
    return this.members;
  }
}