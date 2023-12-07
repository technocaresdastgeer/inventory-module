import { Quotation } from './quotation';
import { Image } from './image';
import { QuotationPart } from './quotation-part';
import { QuotationMetaData } from './QuotationMetaData';
import { Company } from './company';

export class ShopQuotations extends QuotationMetaData {
  Quotations: Array<Quotation>;
  QuotationParts: Array<QuotationPart>;
  QuotationPartsImages: Array<Image>;
  Companies: Array<Company>;
}
