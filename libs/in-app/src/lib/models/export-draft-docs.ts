import { RequestDraft } from "./Request-Draft/request-draft";
import { RequestDraftImage } from "./Request-Draft/request-draft-image";

export class ExportDraftDocuments{
  draftdata: RequestDraft;
  carImages: Array<RequestDraftImage>;
  CarVideos: Array<RequestDraftImage>;
  carDocuments: Array<RequestDraftImage>;
  CarVINMilage: Array<RequestDraftImage>;
}
