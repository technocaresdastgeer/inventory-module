export class UserPermission {
    UserPermissionID: number;
    UserID: number;
    CreatedBy: number;
    ModifiedBy: number;
    IsChecked: boolean;
    CreatedOn: Date;
    ModifiedOn: Date;
    MinPrice: number = 0;
    MaxPrice: number;
}