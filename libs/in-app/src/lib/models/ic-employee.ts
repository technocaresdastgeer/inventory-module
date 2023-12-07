import { Permission } from './permission';

export class ICEmployee {
    ICEmployeeID: number;
    CompanyID: number;
    UserID:number;
    ICWorkshopID: number;
    ImgURL: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber:number;
    Password:number;
    ConfirmPassword:number;
    RoleID:number;
    EmployeeID: number;
    RoleName: string;
    RoleNameArabic:string;
    CreatedOn: Date;
    CreatedBy: number;
    ModifiedBy: number;
    ModifiedOn: Date;
    IsDeleted: boolean;
    UserPermissions: Array<Permission>;
    ESignatureURL:string;
    ShubeddakUserID: number;
    EmployeeName: string;
  }
