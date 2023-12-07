import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _apiCaller: ApiCallerService) { }

  getMakeAndModels(){
    var url = "api/Shubeddak/getmakesandmodels";
    return this._apiCaller.get(url);
  }

  GetAllSpareParts(MakeId: number, ModelId: number){
    // debugger
    var url = 'api/Common/GetAllSpareParts';
    return this._apiCaller.get(url, {MakeId: MakeId, ModelId: ModelId});
  }

}
