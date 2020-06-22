import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { staffProviders } from './staff.providers';
import { StaffService } from './staff.service';
import { StaffResolver } from './staff.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...staffProviders,
    StaffService,
    StaffResolver
  ],
})
export class StaffModule {}