import { RequestDraftImage } from './request-draft-image';
import { RequestDraftTask } from './request-draft-task';
import { AccidentMarker } from "../accident-marker";
import { RequestDraft } from "./request-draft";
import { RequestDraftParts } from './request-draft-parts';
import { CaseDamageReport } from './case-damage-report';
import { PreInspection } from './pre-inspection';
import { DamagedPart } from './damaged-part';
import { RelevantImage } from './relevant-image';
import { DamagePoint } from '../damage-point';

export class DraftData {
  RequestDraft: RequestDraft;
  DraftMarkers:Array<AccidentMarker>;
  RequestDraftTask: Array<RequestDraftTask>;
  RequestDraftImage:Array<RequestDraftImage>;
  RequestDraftPartImage:Array<RequestDraftImage>;
  RequestDraftParts:Array<RequestDraftParts>;
  // FOR AI
  AppID:number;
  ResposeResult:number;
  CaseDamageReport:CaseDamageReport;
  PreInspection:PreInspection;
  DamagedPart: Array<DamagedPart>;
  RelevantImage:Array<RelevantImage>;
  DamagePoint:Array<DamagePoint>;
  AIResponseStatus:string;
  AIResponseMessage:string;
  constructor(){
    this.RequestDraft = new RequestDraft();
    this.DraftMarkers = new Array<AccidentMarker>();
    this.RequestDraftTask = new Array<RequestDraftTask>();
    this.RequestDraftParts = new Array<RequestDraftParts>();
  }
}
