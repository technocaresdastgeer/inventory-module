import { AutomotivePart } from "./automotive-part";

export class UpdateAutomotivePart{
    oldAutomotivePart: AutomotivePart;
    mergeAutomotivePart: AutomotivePart;
    ReplaceWithPart: Array<AutomotivePart>;
    UserID: number;
    StatusID: number;
    constructor(){
        this.ReplaceWithPart = new Array<AutomotivePart>();
    }
}