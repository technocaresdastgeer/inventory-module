export class RequestTask {
    RequestTaskID: number;
    TaskName: string;
    TaskDescription: string;
    TaskTypeID: number = 32;
    LabourTime: number;
    LabourPrice: number;
    RequestID: number;
    IsEdit: boolean;
    IsTaskApproved: boolean;
    TaskRejectReason: string;
    IsModified: boolean = false;
    TaskTypeName: string;
    TaskArabicTypeName: string;

    EventDateTime: Date;
    ModifiedByName: string;
    CreatedByName: string;
    CreatedByEmail: string;
    ModifiedByEmail: string;
    CreatedOn: Date;
    IsDeleted: boolean;
    LabourPriceWithoutDiscount: number;
    EditTaskReason: string;
    OldLabourPrice: number;
    OldLabourPriceWithoutDiscount: number;
    DraftTaskID:number;
    DraftID: number;
    SurveyorPrice: number;
}
