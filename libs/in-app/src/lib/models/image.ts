export class Image {
  ImageID: number;
  ImageURL: string;
  OriginalName: string;
  EncryptedName: string;
  ObjectID: number|string;
  ObjectTypeID: number;
  CreatedOn: Date;
  CreatedBy: number;
  IsDeleted: boolean = false;
  imageDataUrl: string;
  IsDocument: boolean;
  Description: string;

  EventDateTime: Date;
  ModifiedByName: string;
  CreatedByName: string;
  CreatedByEmail: string;
  ModifiedByEmail: string;
  PartNameEnglish: string;
  PartName: string;
  DraftImageID: number;
  IsVideo:boolean;
  IsChecked:boolean=false;
  AccidentID:number;
  IsImage:boolean;
  DocType:number;
  RequestTaskId:number;
  AccidentNumber:string;
}
