import { AccidentMarker } from './accident-marker';
import { POApproval } from './po-approval';
import { AccidentPart } from './accident-part';
import { Accident } from './accident';
import { RequestTask } from './request-task';
import { RequestedPart } from "./requested-part";
import { Note } from './note';
import { Image } from './image';
import { Request } from './request';

export class RequestLog {
    Requests: Array<Request>;
    RequestedParts: Array<RequestedPart>;
    RequestTasks: Array<RequestTask>;
    Accidents: Array<Accident>;
    AccidentParts: Array<AccidentPart>;
    AccidentNotes: Array<Note>;
    POApprovals: Array<POApproval>;
    RequestedPartsImages: Array<Image>;
    AccidentImages: Array<Image>;
    AccidentPartsImages: Array<Image>;
    AccidentMarkers: Array<AccidentMarker>;
    IsRequestWorkshopIC: boolean;
}
