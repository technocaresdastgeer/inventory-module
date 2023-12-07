import { Supplier } from 'src/app/models/supplier';
import { User } from './user';
import { PartInfo } from './part-info';

export class PsProfileData extends User {
  Supplier: Supplier;
  PartsInfo: Array<PartInfo>;
}
