import { MaritalStatus } from 'src/clients/enums/maritalStatus';
import { Sex } from 'src/clients/enums/sex.enum';

export interface IClient {
  id: string;
  createdAt: Date;
  updateAt?: Date;
  code: string;
  name: string;
  sex: Sex;
  birthDate: Date;
  mothersName: string;
  fathersName?: string;
  maritalStatus: MaritalStatus;
  bloodType: string;
}
