import { PreInspection } from "./pre-inspection";
import { RelevantImage } from "./relevant-image";
import { VehicleReading } from "./vehicle-reading";

export class CaseDamageReport {

   CaseDamageReportID:Number;
   caseId:number;
   inspectionId:string;
   vendor:string;
   version:string;
   vehicleReadings:VehicleReading;
   preInspection:PreInspection;
   relevantImages:Array<RelevantImage>;
   EnglishMakeName:string;
   ArabicMakeName:string;
   ImgURL:string;
   EnglishModelName:string;
   ArabicModelName
}
