import { Workshop } from "./workshop";

export class ICWorkShop extends Workshop {
    ICWorkshopID: number;
    CompanyID: number;
    CompanyCode:string;
    IsApproved: boolean;
    StatusID:number;
    TotalRepairOrderAmount: number;
    RepairOrderCount: number;
    EmployeeID: number;
    CompanyName: string;
    WorkshopOwnerName: string;
    AccountID: number;
    AccountNumber: string;
    IsAIDraft: boolean;
    UserID: number;
    IsLossDate: boolean;
    IsPoliceReportNumber: boolean;
    IsMilage: boolean;
    IsMilageImage: boolean;
    IsVINImage: boolean;
    IsVIN: boolean;

}
