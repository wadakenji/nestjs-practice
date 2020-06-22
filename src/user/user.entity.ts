import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Facility } from '../facility/facility.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  age!: number

  @ManyToOne(() => Facility)
  @JoinColumn()
  facility!: Facility
}
