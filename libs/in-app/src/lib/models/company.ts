import { User } from './user';

export class Company extends User {
  CompanyID: number;
  Name: string;
  LogoURL: string;
  CityID: number;
  FaxNumber:string;
  WebsiteAddress:string;
  CountryID: number;
  AddressLine1: string;
  AddressLine2: string;
  CPFirstName: string;
  CPLastName: string;
  CPPositionID: number;
  CPPhone: string;
  CPEmail: string;
  StatusID: number;
  CreatedOn: Date;
  CreatedBy: number;
  ModifiedBy: number;
  ModifiedOn: Date;
  IsDeleted: boolean;
  CityName: string;
  CountryName: string;
  TypeName: string;
  StatusName: string;
  CPPositionName: string;
  CPPositionArabicName: string;
  ShowText: boolean = false;
  ESignatureURL: string;
  CompanyName: string;
  TotalQuotations: number;
  DiscountValue: number;
  AskForPartCondition: boolean;
  AccidentLimit:number;
  EmailTo: string;
  EmailCC: string;
  SuggestionOfferTime : number;

}
