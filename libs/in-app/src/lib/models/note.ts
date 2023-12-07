export class Note {
  NoteID: number;
  TextValue: string;
  AccidentID: number;
  CreatedOn: Date;
  CreatedBy: number;
  ModifiedBy: number;
  ModifiedOn: Date;
  IsDeleted: boolean;
  CreatedByName: string;
  ModifiedByName: string;
  LastModifiedOn: Date;
  IsPublic: boolean = false;
  IsModified: boolean = false;

  EventDateTime: Date;
  CreatedByEmail: string;
  ModifiedByEmail: string;
}
