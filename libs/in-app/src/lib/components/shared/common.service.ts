import { Injectable } from '@angular/core';
import { ApiCallerService } from './api-caller.service';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { DamagePoint } from '../../models/damage-point';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private httpOptions;
  constructor(private _apiCaller: ApiCallerService, private _shareService: SharedService) { }

  getMakeAndModels(){
    var url = "api/Shubeddak/getmakesandmodels";
    return this._apiCaller.get(url);
  }

  GetAllSpareParts(SupplierID: number, pageNo: number){
    // debugger
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var url = 'api/Common/GetAllSpareParts';
    return this._apiCaller.get(url, {SupplierID: SupplierID, pageNo: pageNo}, this.httpOptions);
  }

  GetJCMainSeries(MakeName: string, ModelName: string,YearCode: string,GroupName: string){
    var url = "api/Company/GetJCMainSeries";
    return this._apiCaller.get(url, {MakeName: MakeName, ModelName: ModelName,YearCode:YearCode,GroupName:GroupName});
  }

  GetCommonMeta(userID: number): Observable<any> {
    var url = 'api/Common/GetCommonMeta';
    return this._apiCaller.get(url, { userID: userID,RoleID: 4, EncrUserID: null,
      EncrRoleId: null});
  }

  getPartsDetails(DamagePointID: Array<DamagePoint>,PageNo:number,Name1:string): Observable<any> {
    var url = "api/Shubeddak/GetPartsDetails";
    var obj = {DamagePoint:DamagePointID,PageNo:PageNo,Name1:Name1,CountryID:1 }
    return this._apiCaller.post(url, obj);
  }

  SaveSupplierInventoryAgainstSeries(parts){
    var url = "api/Common/SaveSupplierInventoryAgainstSeries";
    return this._apiCaller.post(url, parts);
  }

  DeleteSupplierInventoryAgainstSeries(SupplierID,  UserID, AutomotivePartID){
    var url = "api/Common/DeleteSupplierInventoryAgainstSeries";
    return this._apiCaller.get(url, { SupplierID: SupplierID, UserID: UserID, AutomotivePartID: AutomotivePartID});
  }

  GetJCSeriesCase(JCSeriesID: string,AccidentID?: number,YearCode?: number){
    var url = "api/Company/GetJCSeriesCase";
    return this._apiCaller.get(url, {JCSeriesID: JCSeriesID,AccidentID:AccidentID,YearCode:YearCode});
  }
  

}
