import { DamagePoint } from './damage-point';

export class AccidentMarker extends DamagePoint {
    AccidentMarkerID: number;
    AccidentID: number;
    IsDamage: boolean;
    IsAddition: boolean;

    EventDateTime: Date;
    ModifiedByName: string;
    CreatedByName: string;
    CreatedByEmail: string;
    ModifiedByEmail: string;
    CreatedOn: Date;
    IsDeleted: boolean;
    PointNameArabicPointNameArabic: string;
    AccidentTypeID: number;
    DraftMarkerID:number;
    DraftID: number;
}
