import { Note } from './note';
import { QuotationPart } from './quotation-part';
import { RequestedPart } from './requested-part';
import { Request } from './request';
import { Image } from './image';
import { AccidentMarker } from './accident-marker';
import { RequestTask } from './request-task';
import { POApproval } from './po-approval';
import { SurveyorsSignature } from './surveyors-signature';
import { PurchaseOrder } from './PurchaseOrder';
export class RequestData {
  Request: Request;
  RequestID: number;
  RequestedParts: Array<RequestedPart>;
  RequestedPartsPrice: Array<RequestedPart>;
  RequestedPartsImages: Array<Image>;
  QuotationPartsImages: Array<Image>;
  OrderedParts: Array<QuotationPart>;
  AccidentMarkers: Array<AccidentMarker>;
  RequestTasks: Array<RequestTask>;
  AccidentImages: Array<Image>;
  Notes: Array<Note>;
  ModifiedBy: number;
  QuotationParts: Array<QuotationPart>;
  POApprovalEmployees: Array<POApproval>;
  SurveyorsSignatures: Array<SurveyorsSignature>;
  PartsApprovedBySignatures: Array<SurveyorsSignature>;
  TasksApprovedBySignatures: Array<SurveyorsSignature>;
  POApprovedSignatures: Array<SurveyorsSignature>;
  CarReadyImages: Array<Image>;
  Suppliers: Array<PurchaseOrder>
  constructor() {

    this.AccidentMarkers = new Array<AccidentMarker>();
    this.Request = new  Request();
    this.RequestedParts = new Array<RequestedPart>();
  }
}
