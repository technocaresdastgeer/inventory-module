import { PartBranch } from './part-branch';
import { Image } from "./image";
import { Quotation } from "./quotation";
import { RequestedPart } from "./requested-part";
import { Note } from './note';
import { QuotationPart } from './quotation-part';
import { Request } from './request';

export class RequestAllOffersData {
    Request: Request;
    SupplierQuotations: Array<Quotation>;
    RequestedParts: Array<RequestedPart>;
    RequestedPartsImages: Array<Image>;
    Branches: Array<PartBranch>;
    AccidentNotes: Array<Note>;
    AccidentImages: Array<Image>;
    QuotationParts: Array<QuotationPart>;
    QuotationPartsImages: Array<Image>;

    constructor() {
        this.Request = new Request();
        this.SupplierQuotations = new Array<Quotation>();
        this.RequestedParts = new Array<RequestedPart>();
        this.RequestedPartsImages = new Array<Image>();
        this.Branches = new Array<PartBranch>();
        this.AccidentNotes = new Array<Note>();
        this.AccidentImages = new Array<Image>();
        this.QuotationParts = new Array<QuotationPart>();
        this.QuotationPartsImages = new Array<Image>();
    }
}