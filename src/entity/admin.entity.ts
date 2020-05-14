import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// 这里可以修改表名
// @Entity('messages')
@Entity('admins')
export class Admins {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: string;
}
