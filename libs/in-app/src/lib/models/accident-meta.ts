import { ObjectType } from './object-type';
import { AutomotivePart } from './automotive-part';
import { Make } from './make';
import { Model } from './model';
import { PartInfo } from './part-info';
import { Year } from './year';
import { ICWorkShop } from './ic-workshop';
import { AccidentMarker } from './accident-marker';
import { TabInfo } from './tab-info';
import { TechnicalNotes } from './TechnicalNote';
import { TRApproval } from './tr-approval';
import { User } from './user';

export class AccidentMeta {

  // Makes: Array<Make>;
  // Models: Array<Model>;
  PartsInfo: Array<PartInfo>
  // Years: Array<Year>;
  Workshops: Array<ICWorkShop>;
  AccidentMarkers: Array<AccidentMarker>;
  // AutomotivePart: Array<AutomotivePart>;
  // ObjectTypes: Array<ObjectType>;
  TabInfoData:TabInfo;
  TechnicalNote: TechnicalNotes;
  TRApprovalEmployees: Array<TRApproval>;
  Users: Array<User>;
}
