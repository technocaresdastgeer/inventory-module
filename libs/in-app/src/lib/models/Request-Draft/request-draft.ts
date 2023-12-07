import { Request } from "../request";

export class RequestDraft extends Request{
  DraftID:number;
  IsAccidentExist: boolean;
  IsAIReport:boolean;
  IsAIDraft:boolean;
  LossDate:Date | string;
  RejectDraftReason: string;
  PoliceReportNumber: string;
  AIToken: string;
  AICaseID: string;
  Milage:number;
  MilageUnit:number;
  RestoreDraftReason:string;
}
