import { ObjectType } from './object-type';
import { City } from './city';
import { Country } from './country';

export class ProfileMeta {
  Cities: Array<City>;
  Countries: Array<Country>;
  Positions: Array<ObjectType>;
}
