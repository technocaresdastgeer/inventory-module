export class PartInfo {
  PartInfoID: number;
  SupplierID: number;
  MakeID: number;
  MakeName: string;
  ModelID: number;
  ModelName: string;
  ProductionYearFrom: number;
  ProductionYearTo: number;
  CreatedOn: Date;
  CreatedBy: number;
  ModifiedBy: number;
  ModifiedOn: Date;
  IsModified: boolean = false;
  IsDeleted: boolean;
  MinYearCode: string = '1950';
  MaxYearCode: string = '2022';
  ConditionTypeID: number;
  IsConditionNew: boolean = true;
  IsConditionUsed: boolean = true;
  IsConditionOriginal: boolean = true;
  IsConditionAfterMarket: boolean = true;
  IsAllSelected: boolean;
  IsApproved:  number = 1;
  IsCheck: boolean;
  SupplierName: string;
}
