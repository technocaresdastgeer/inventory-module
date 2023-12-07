import { Company } from "./company";

export class Workshop extends Company {
    WorkshopID: number;
    UserID: number;
    WorkshopName: string;
    WorkshopPhone: string;
    WorkshopCityName: string;
    WorkshopGoogleMapLink: string;
    WorkshopCityID: number;
    WorkshopAreaName: string;
    CreatedOn: Date;
    CreatedBy: number;
    ModifiedBy: number;
    ModifiedOn: Date;
    IsDeleted: boolean;
    StatusID: number;
    ProfileImageURL: string;
    Email: string;
    IsCompanyApproved: boolean;
    CompanyID: number;
    RequestLimit: number;
}
