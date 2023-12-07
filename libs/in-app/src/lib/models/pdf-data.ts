import { StringValueToken } from "html2canvas/dist/types/css/syntax/tokenizer";

export class PdfData {
    elementHtml: string;
    AccidentNo: string;
    CompanyName: string;
    AccidentID: number;
    ModifiedBy: number;
    RequestID:number;
    RequestNumber:number;
    StatusID: number;
    SupplierPdfs: Array<PdfData>;
    SupplierID: number;
    QuotationID: number;
    CountryID: number;
    constructor (){
      this.SupplierPdfs = new Array<PdfData>();
    }


}
