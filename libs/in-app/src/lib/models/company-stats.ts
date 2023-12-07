export class CompanyStats {

   CompanyID :number;
   CompanyName :string;
   AccidentWithrequestCount:number;
   RequestedPartsCount:number;
   CompanyRate :number;
   IsEdit: boolean = false;
   tempCompanyRate:number;
   Invoice: number;
   TotalAccidentCount: number;
   DuplicateAccidentCount: number;
   AccidentWithZeroQuotation: number;
   AccidentWithoutRequest: number;
   AccidentWithUnpublishRequest: number;
}
