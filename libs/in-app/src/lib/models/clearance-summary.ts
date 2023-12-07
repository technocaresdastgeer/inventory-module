import { Quotation } from 'src/app/models/quotation';
import { RequestTask } from './request-task';
import { Request } from "./request";
import { RequestedPart } from "./requested-part";
import { Employee } from './employee';


export class ClearanceSummary {
    Request: Request;
    RequestedParts: Array<RequestedPart>;
    RequestTasks: Array<RequestTask>;
    Quotations: Array<Quotation>;
    Employees:Array<Employee>;
}
