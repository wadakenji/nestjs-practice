import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import {Facility} from '../facility/facility.entity';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  fistName!: string

  @Column()
  lastName!: string

  @Column()
  facilityAdmin!: boolean

  @Column()
  systemAdmin!: boolean

  @ManyToOne(() => Facility)
  @JoinColumn()
  facility!: Facility
}
