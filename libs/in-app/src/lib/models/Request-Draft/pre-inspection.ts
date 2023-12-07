import { DamagedPart } from "./damaged-part";

export class PreInspection {

   PreInspectionID:number;
   recommendationStatus:string;
   message:string;
   damagedParts:Array<DamagedPart>;
   CaseDamageID:number;
}
