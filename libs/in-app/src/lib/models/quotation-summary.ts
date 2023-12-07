import { Image } from './image';
import { QuotationPart } from './quotation-part';
import { Quotation } from './quotation';
import { Request } from './request';
import { RequestedPart } from './requested-part';
export class QuotationSummary {

    Request: Request;
    Quotations: Array<Quotation>
    RequestedParts: Array<RequestedPart>;
    QuotationParts: Array<QuotationPart>;
    RequestedPartsImages: Array<Image>;
    QuotationPartsImages: Array<Image>;
    
}