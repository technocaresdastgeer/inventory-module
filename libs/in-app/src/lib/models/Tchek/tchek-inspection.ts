export class TchekInspection{
  TchekInspectionID: number;
	TchekID: string;
	ShortID: string
	IsDeleted: boolean;
	IsFlagged: boolean;
	IsNew: boolean;
	Type: number;
	ScanToUpload: boolean;
	UploadHDPictures: boolean;
	TchekCreatedOn: Date;
	PercentDamage: number;
	PercentParts: number;
	ReportUrl: string;
	ThumbnailUrl: string;
	Status: number;
  Response: string;
	CreatedOn: Date;
	CreatedBy: number;
	ModifiedOn: Date;
	ModifiedBy: number;
}
