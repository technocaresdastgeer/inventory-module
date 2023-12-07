import { Note } from 'src/app/models/note';
import { RequestData } from './request-data';
import { Quotation } from './quotation';
import { QuotationPart } from './quotation-part';
import { Image } from './image';
import { PartBranch } from './part-branch';
import { City } from './city';
import { PartsBargain } from './parts-bargain';
export class QuotationData extends RequestData {
  Quotation: Quotation;
  QuotationParts: Array<QuotationPart>;
  RejectedSupplierParts: Array<QuotationPart>;
  Branches: Array<PartBranch>;
  Cities: Array<City>;
  TotalPendingParts: number;
  SupplierQuotations: Array<Quotation>;
  ReferredSupplierQuotations: Array<Quotation>;
  RejectedSupplierOffers: Array<Quotation>;
  AccidentImages: Array<Image>;
  AccidentNotes: Array<Note>;
  QuotationIDUnderTenPercent: Array<number>;
  ReviewNotes: Array<Quotation>;
  partsBargains : Array<PartsBargain>;
}
