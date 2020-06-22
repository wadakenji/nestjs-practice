import { Resolver, Query } from '@nestjs/graphql'
import { StaffService } from './staff.service'

@Resolver('Staff')
export class StaffResolver {
  constructor(private staffService: StaffService) {}

  @Query('getStaffs')
  async getStaffs() {
    return this.staffService.findAll()
  }
}
