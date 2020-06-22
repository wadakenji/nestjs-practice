import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import {Staff} from '../staff/staff.entity';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  username!: string

  @Column()
  password!: string

  @OneToOne(() => Staff)
  @JoinColumn()
  staff!: Staff
}
