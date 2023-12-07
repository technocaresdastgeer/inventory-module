import { QuotationPart } from 'src/app/models/quotation-part';
import { RequestedPart } from './requested-part';
import { PartManufacturer } from './part-manufacturer';
import { Country } from './country';
import { ManufacturerRegion } from './manufacturer-region';
import { City } from './city';

export class QuotationFilterModel {
    DemandID: number;
    RequestID: number;
    IsReferred: boolean = true;
    ConditionTypeID: number = null;
    NewConditionTypeID: number = null;
    Availability: number;
    MinPrice: number = 0;
    MaxPrice: number = 10000;
    Countries: Array<Country>;
    PartManufacturers: Array<PartManufacturer>;
    RequestedParts: Array<RequestedPart>;
    QuotationParts: Array<QuotationPart>;
    ManufacturerRegions: Array<ManufacturerRegion>;
    SortByPrice: string = 'ASC';
    SortByRating: string = 'ASC';
    SortByFillingRate: string = 'DESC';
    Price: number = undefined;
    IsPaid: number = null;
    AreaName: string;
    Cities: Array<City>;
    MinFillingRate: number = 0;
    MaxFillingRate: number = 100;
    Rating: number = 5;
    constructor() {
        this.Countries = new Array<Country>();
        this.PartManufacturers = new Array<PartManufacturer>();
        this.RequestedParts = new Array<RequestedPart>();
        this.QuotationParts = new Array<QuotationPart>();
        this.ManufacturerRegions = new Array<ManufacturerRegion>();
    }
}