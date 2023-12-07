import { ObjectType } from './object-type';
import { City } from './city';
import { Country } from './country';
import { Make } from './make';
import { Model } from './model';
import { Year } from './year';
import { PartInfo } from './part-info';
import { AutomotivePart } from './automotive-part';

export class PartShopProfileMeta {
  Cities: Array<City>;
  Countries: Array<Country>;
  Positions: Array<ObjectType>;
  Makes: Array<Make>;
  Models: Array<Model>;
  MakeGroups: Array<Model>;
  Years: Array<Year>;
  PartsInfo: Array<PartInfo>;
  AutomotiveParts:Array<AutomotivePart>;
}
