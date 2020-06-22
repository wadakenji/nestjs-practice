import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import {User} from '../user/user.entity';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  bodyTemperature!: number

  @Column()
  bloodPressure!: number

  @Column()
  pulse!: number

  @OneToOne(() => User)
  @JoinColumn()
  user!: User
}
