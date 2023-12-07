import { Country } from './country';
import { PartManufacturer } from './part-manufacturer';
import { RequestedPart } from './requested-part';

export class QuotationFilter {
    DemandID: number;
    IsReferrd: number;
    ConditionTypeID: number;
    Availibility: number;
    MinPrice: number;
    MaxPrice: number;
    Countries: Array<Country>;
    PartManufacturers: Array<PartManufacturer>;
    RequestedParts: Array<RequestedPart>;
}