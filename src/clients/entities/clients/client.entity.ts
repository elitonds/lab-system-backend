import { MaritalStatus } from 'src/clients/enums/maritalStatus';
import { Sex } from 'src/clients/enums/sex.enum';
import { IClient } from './client.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('client')
export class Client implements IClient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
  })
  updateAt?: Date;

  @Column({ length: 8 })
  code: string;

  @Column({ length: 300 })
  name: string;

  @Column({ enum: Sex })
  sex: Sex;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column({ name: 'mothers_name' })
  mothersName: string;

  @Column({ name: 'fathers_name', nullable: true })
  fathersName?: string;

  @Column({ name: 'marital_status', enum: MaritalStatus })
  maritalStatus: MaritalStatus;

  @Column({ name: 'blood_type', length: 3 })
  bloodType: string;
}
