import { User } from "./user";

export class Employee extends User{
  EmployeeID: number;
  CompanyID: number;
  PositionID: number;
  LastName: string;
  FirstName: string;
  Phone: string;
  Email: string;
  ProfileImageURL: string;
  CreatedOn: Date;
  CreatedBy: number;
  ModifiedBy: number;
  ModifiedOn: Date;
  IsDeleted: boolean;
  IsApproved:boolean;
  ClearanceSummaryApprovalID:number;
}
