import { Image } from './image';
import { DamagePoint } from 'src/app/models/damage-point';
import { Accident } from "./accident";
import { AccidentCost } from "./accident-cost";
import { AccidentMarker } from "./accident-marker";
import { TechnicalNotes } from "./TechnicalNote";
import { TRApproval } from "./tr-approval";

export class TechnicalNotesData{
    TechnicalNotes: TechnicalNotes;
    accidents: Array<Accident>;
    accidentCosts: Array<AccidentCost>;
    accidentMarker: Array<AccidentMarker>;
    TRApprovalEmployees: Array<TRApproval>;
    TRApprovalLogEmployees: Array<TRApproval>;
    accidentInfo: Array<AccidentCost>;
    CommonDamagePoints:Array<DamagePoint>;
    AccidentImages: Array<Image>;
}
