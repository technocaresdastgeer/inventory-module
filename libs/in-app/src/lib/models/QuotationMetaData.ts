import { ObjectStatus } from './object-status';
import { Year } from './year';
import { Model } from './model';
import { Make } from './make';
import { Company } from './company';

export class QuotationMetaData {
  Makes: Array<Make>;
  Models: Array<Model>;
  Years: Array<Year>;
  Companies: Array<Company>;
  ObjectStatuses: Array<ObjectStatus>;
}
