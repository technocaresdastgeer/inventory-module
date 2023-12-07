export class PurchaseOrder {
  PurchaseOrderID: number;
  StatusID: number;
  RequestID: number;
  QuotationID: number;
  SupplierID: number;
  PONote: string;
  POPdfURL: string;
  POAmount: number;
  IsDeleted: boolean;
  ModifiedOn: Date;
  ModifiedBY: number;
  CreatedBy: number;
  CreatedOn: Date;
  SupplierName: string;
  SupplierPhone: string;
  RequestNumber: number;
}
