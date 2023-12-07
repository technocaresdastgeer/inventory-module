import { RequestMeta } from 'src/app/models/request-meta';
import { RequestedPart } from './requested-part';
import { Request } from './request';
import { Image } from './image';
import { Company } from './company';
import { POApproval } from './po-approval';
import { TabInfo } from './tab-info';
import { PurchaseOrder } from './PurchaseOrder';
import { ObjectType } from './object-type';

export class CompanyRequests extends RequestMeta {
  Requests: Array<Request>;
  RequestedParts: Array<RequestedPart>;
  RequestedPartsImages: Array<Image>;
  Companies: Array<Company>;
  POApprovalEmployees: Array<POApproval>;
  PurchaseOrders: Array<PurchaseOrder>;
  TotalPages: number;
  TabInfoData:TabInfo;
  ObjectType:Array<ObjectType>;
}
