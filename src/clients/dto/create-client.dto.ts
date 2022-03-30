import { MaritalStatus } from '../enums/maritalStatus';
import { Sex } from '../enums/sex.enum';

export interface ICreateClientDto {
  code: string;
  name: string;
  sex: Sex;
  birthDate: Date;
  mothersName: string;
  fathersName?: string;
  maritalStatus: MaritalStatus;
  bloodType: string;
}
