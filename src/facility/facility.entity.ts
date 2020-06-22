import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Corporation } from '../corporation/corporation.entity'

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @ManyToOne(() => Corporation)
  @JoinColumn()
  corporation!: Corporation
}
