import { Body, Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { TestService } from './test.service'

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  controlTestGet(@Req() _request: Request): string[] {
    return this.testService.findAll()
  }

  @Post()
  controlTestPost(@Body() body: { member: string }): void {
    return this.testService.create(body.member)
  }
}
