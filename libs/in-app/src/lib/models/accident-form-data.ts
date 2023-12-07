import { Accident } from './accident';
import { Note } from './note';
import { Image } from './image';
import { AccidentMarker } from './accident-marker';
import { AccidentPart } from './accident-part';
import { TechnicalNotes } from './TechnicalNote';
import { AIInspectionRequest } from './AIInspectionRequest';

export class AccidentFormData {
    Accident: Accident;
    Notes: Array<Note>
    AccidentImages: Array<Image>;
    AccidentMarkers: Array<AccidentMarker>;
    AccidentParts: Array<AccidentPart>;
    AccidentPartsImages: Array<Image>;
    TechnicalNotes: TechnicalNotes;
    customerRequests:Array<AIInspectionRequest>

    constructor() {
        this.Accident = new Accident;
        this.Notes = new Array<Note>();
        this.AccidentImages = new Array<Image>();
        this.AccidentMarkers = new Array<AccidentMarker>();
        this.AccidentParts = new Array<AccidentPart>();
        this.AccidentPartsImages = new Array<Image>();
        this.TechnicalNotes = new TechnicalNotes();
        this.customerRequests = new Array<AIInspectionRequest>();
    }
}
