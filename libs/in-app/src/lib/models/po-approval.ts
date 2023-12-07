export class POApproval {
    POApprovalID: number;
    UserID: number;
    RequestID: number;
    ModifiedBy: number;
    CreatedBy: number;
    CreatedOn: Date;
    ModifiedOn: Date;
    IsApproved: boolean;
    EmployeeID: number;
    FirstName: string;
    LastName: string;
    Email: string;
    ESignatureURL: string;

    EventDateTime: Date;
    ModifiedByName: string;
    CreatedByName: string;
    CreatedByEmail: string;
    ModifiedByEmail: string;
    IsDeleted: boolean;
    MaxPrice:number;
}