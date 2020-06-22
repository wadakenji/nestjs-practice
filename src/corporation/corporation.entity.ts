import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Corporation {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string
}
