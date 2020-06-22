import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity'

@Injectable()
export class StaffService {
  constructor(
    @Inject('STAFF_REPOSITORY')
    private staffRepository: Repository<Staff>,
  ) {}

  async findAll(): Promise<Staff[]> {
    return this.staffRepository.find();
  }
}