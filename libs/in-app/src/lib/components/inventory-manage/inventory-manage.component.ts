import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../shared/common.service';
import { Model } from '../../models/model';
import { Make } from '../../models/make';
import { SharedService } from '../shared/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { DamagePoint } from '../../models/damage-point';
import { AutomotivePart } from '../../models/automotive-part';
import { joClaimsSeriesData } from '../../models/joClaimsSeriesData';
import { AccidentFormData } from '../../models/accident-form-data';
import { Year } from '../../models/year';
import { GroupName } from '../../models/groupName';
import { UpdateAutomotivePart } from '../../models/update-automotive-part';
import { SeriesArray } from '../../models/seriesArray';
import { userObject } from '../../models/userObject';
import { partsObj } from '../../models/partsObj';
import { environment } from '../../environment/environment';
import { JCSeriesCase } from '../../models/JCSeriesCase';
import { RequestMeta } from '../../models/request-meta';
import { RequestData } from '../../models/request-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'inventory-app-inventory-manage',
  templateUrl: './inventory-manage.component.html',
  styleUrls: ['./inventory-manage.component.scss']
})
export class InventoryManageComponent implements OnInit {
  @Input() userObj: userObject;
  apiUrl = environment.API_URL
  items: any;
  MakeID: number;
  ModelID: number;
  DamagePoints: Array<DamagePoint>;
  tempReplacedPart: AutomotivePart;
  totalPages: number = 0;
  spareParts: any;
  p: number = 1;
  p2: number = 1;
  ModalMakeID: number;
  ModalModelID: number;
  
  DeleteModelMakeID: number;
  DeleteModelID: number;
  ReplaceModelID: number;
  stepTab: number =1;

  activeModelRef: NgbModalRef;
  activeAddPartModelRef: NgbModalRef;
  activeediteModelRef: NgbModalRef;
  activedeletePartModelRef: NgbModalRef;

  PartInfo: [];

  tabId = 1;
  Make: Make;
  Model: Model;
  HMakeID: number;
  HModelID: number;
  filteredModels: Array<Model>;
  ModalfilteredModels: Array<Model>;
  makeChanges: boolean = false;
  modelChanges: boolean = false;
  Requests: Array<Request>;
  verifyModelID: number;
  StartYear: number;
  EndYear: number;
  AllCheck: boolean = false;
  DisableAdd:boolean = false;
  OldModelName:string;
  MakeName:string;
  pageNo:number = 1;
  Makes: any;
  Models: any;
  ReplaceModel: Model;
  IsEdit: boolean = false;
  Years: Array<Year>;
  groupnameCount: number;

  YearCode: any;
  GName: string;
  GroupName: Array<GroupName>
  
  DamagePointNumber: number;
  formData: AccidentFormData;

  Names1: Array<AutomotivePart>;
  tempArrayName1: Array<AutomotivePart>;
  tempAutoPart: Array<AutomotivePart>;
  IsContainItem: boolean = false;
  AutomotivePartCount:number;
  AutomotiveParts: Array<AutomotivePart>;
  AllAutomotiveParts: Array<AutomotivePart>;
  tempMergeParts: AutomotivePart;
  Name1: string;
  StatusID: number = 29;
  name: AutomotivePart;
  PartNames: Array<string>;
  PartName: string;
  automotivePart: UpdateAutomotivePart;

  SeriesArray: Array<SeriesArray> = []
  // seriesID: string;
  newPrice: number = 0;
  usedPrice: number = 0;
  afterMarketPrice: number = 0;

  MinYear: number;
  MaxYear: number;
  quantity: number = 0;
  isEdit: boolean = false;
  jcMainSeries: any[];
  _meta: RequestMeta;
  selectCorrectImage: string;
  selectedCorrectSeriesID: string = null;
  requestData: RequestData;
  jCSeriesCases2 = [];
  jcMainSeries2 = [];
  selectedFuelType: string = null;

  constructor(public _modelService: NgbModal, public _sharedService: SharedService, public _commonService: CommonService, translate: TranslateService) { 
    translate.setDefaultLang('en');
    this._commonService.GetCommonMeta(81,).subscribe(res =>{
      console.log('getCoomon meta',res)
      this.Makes = res.Makes;
      this.Models = res.Models;
      this.Years = res.Years;
      console.log(this.Years)
      this.GroupName = res.GroupName;
      this.DamagePoints = res.DamagePoints;
    })
  }

  ngOnInit() {
    console.log(this.userObj);
    //let token = 'AJULSwGyFSRp-r9wtPGKZQzJwYAhn5rGg3LCSDgFuCxTMc_10Hiy6IRzTMu2HzQqb86a1uZkZsbmkTghGrbr4KroUCCtnWeMT19PO6T23fcnyTmaHLeifuK7XeLpEQWocFc92-cNkM_727CAbpQkBK_Qr4E2naFm06WeSbjybHiUnXRnJHWtcf-udDvSz3jNyx2iQwpSGvEQCQLmWBTxHkSbKFDfJd8v3OT3i74SKLzCBmQjQploumnci2sCYrC3lMb3gHe65fNZkmxRriYiIUhdvbIWvsPxMtABGyUqVmoB2kmO-Tx_877PnDVEsspmAh4HehL7aPIANjKjRHvDgzj-s5SYZAL5-h1d-MJeQqTZB21bxyyUi-n_yG_ix1AG2ci3_xAtKpMrihLQ_TidKsXs8s7-2CJ6z-GzwFtHLc8YZWCBkpPUDA6qFiotPjer8gnGRrAzWwPC5RHDLmrxnHulC1qHs57YFuRqV_zhRqgSUPoRGDjRoR7Sd18nkEkeUVkZVbmXMuaPNqjFd5juAG7pPekWN618xT9nF4rhMm4VYf8zdRbIb7PIiBWdnrIftjrsPAABKWEd6V1g3v4ca6ZcQ4Th3K0OFJ6hMkb989fDMh9eQO3EjwCeIcOXf-ZwOqoyl39t3cNZArzHfF-Pubqs4xbjhp9gU2BVcu5EiOra5UqGAfOXJGhzT4ZksYucFP_H-Yqge0BWAKiuM6IjDms0QXlUwtct0vs-6iaxG9Pnar9XoIRaZCyeSNKBA7tOS-d26fWF7ZKaq2TnaXNh7ENbhT1sjM7U1KmIF6QpnU8zY2BSSC_C96U7i0W7qxu8D8K7XTc643ug41UKwTUtZeWfL6SV_Lg_s3jMNFWJ_tKNsuxqzKXjtrUjU3G9HNJ5cyQHVRnOpqbnvIjkNL07ZX2zpQBJmJ_WJT7CNK3CX5kb7WEdWk4_Pxoo6FljmFOOcpkYh0RyXjXoYlOeqKS2L6SOYFuFSxsD9olEq5xpWdgJktWibFv10jcmtE0ot53ukE9tiiFZhV58T2CUNepFikjQP6nBumV3vNa4nPpaE8rCM_o7kMGW7eVYgfJcYUiHzfxWd9ajQ5pZ5SjISg5r_Shm2cQtCwjP415j4zDgLeO0wh6n4SYydxGoccgZtYv-v0BRarlQfR-9fO910A6V71gBB6BMjleRjsImbTeUIDVakpZr3YFvfGIM9Jbgsk0TU9JrUMF3C3PC3hjscVbPr0fzjbjAaO5lBG-1lZrArr5GfzB7ipE7ogeMPWf-z8TUyTWwznBE2mhxs2GUYsBpFqqerP-wVsYpCZ0BYMxgN8wvMsNOovUfoNFpQkzyQL2WNIzajPdzN88FRVJ_-eTTL0fMCZY5PBlsMsAnbXeNk1UgCOTFCSIjZ_kmRHL9u5nhExOY74uOPChcARyGs5rCx_CkOoBEtHPPCdoXUNaaRYwSQUxNDCNnoPgjj3zOJkgwLJrmlGL7ogdKz3scoWrfKeAUq2VrxTYRWfJN9ckgD4QN2TZai5uEELV9fo871FM62eh3kX1LSWpFz7vxPsLpCEGCB61V4bB-lA5wgmOCqVDOHSd7h2KTmysveEgtJOKJFP2Q0BzC0UyvpY2Mtzg9OVp2rVh3qt7coNP3kplmr8HolvWkE1cmpzASLZzVDr-lQSxHdUxExjqFpesh_zh2YVF2OcAwekjm2jhA9mSJ0dI21afZeMOE5IAk_5l1XZ5Z7GdlqRCVbitNTpKaysuI4tff_g9l8-Qrpkfkb-rGg1zSa3zpDoi66e4yRIPFfyd4kNBuQ9iCRkj_tUoRZHp8uC6kpus4JFRHZx9GdcqAeQqUFhFwT1Mr4zrod7X9Udu9DbZ4v7WR0Oq4isTIjtHxoLngkAmCBwtJuyKtPDkNr5AnQjWt2UFiybKyOcARfaCphlBH61Mw1TWWezR-5f5VDlIqROiHe6V4q4C6VppijhdMiD9nXCHi0XbNRbaH8NSUd-kiP17a2_7Odt6Jj7fbTVZoUXwWEhyiAT5x12a8JK61_dmdAzBepzF_CdsFaYT8Kst2T68AP1F6ztKMmtBQpZOUw8DH-5HalXP1COJ_EDmGdhsVe0KFtQUOtq8J7AOawGHBDnp8z0SK6YjkQMaqJzp-o3XjsMgZ0lF9nBAUbztsLzZiLt1w_Ru70zfn8hL7gmTm_5DY2oli1B-PLYKkKpMdFmPKwn5jewYMnqT8VO9fZG-LqN5JJJdHTVdOODleWNIfptACtSVZZVScn06UgP9S3jEzNekfD5XGrflpQqhjZNDErlmGX1zqDM7uM_a8ZjPFNu7t5l_MP_a44VCk0CMTaUrK61-T6g39HgvUOEgFyJrjdrIRc7nWaJneDCQ2prvFfa7VIH4A9-pMWZ_pPqBVmPDvcZ2dgMoWXyB5Yi-Z13ebjP1bgar9Yr7HIlt0l9cjykGgv2DLg58EWbBb6qMScSnw_36q9rueRCw8Yq8-G7WQ_KRCNhzY_W4_oNnmGQfFLhvyaKf9cRYmg4X_B1_GyaIhnNYC-saAzuxGNHc0-UZmEoMA-hq4ZFpFQUmte8P45i3HGzJUNko9gDrtCUuhDPlQa2EphETSnO9vpxeemsYH_ZbCfzXEw2DQ9y50nqvHQssiCBSCZfdOHthsQqd83eh_Z_iNGf-sf-LlgvVkz35Hx0aQdpmli19xnJTpjKUyMDxmJW9PQKvwy-f6_b_5KPA7RQPp5f_3qIOfGzao88NrQB_uGnEbCQlNvgdbdLDN5fhQL7Egi-v3z00YMlvSMBA1YjiccPaaxKjQb6hum8EkXKW9AVOv8g57_ER3Yki8xmJefHGUFgmIW_1sbKTlub2c4fHJVrUIrmllBw1r1CXYXaxLrtU8CN_aRp0TkLyANBxL82pme5966nw-rwGjchzvyVUFI9q5mSAhm-H28ITEgP7VR1Hd39BpA9MSg-4J4ARPE37tdJTMY06LUDHU2TJmMxkg-LuudLLia-zTjOuraxSX015aY30pwY2sHwCsqyiagDDRouRTKVZxrip603inCLJjaLQBTUtSP4SLfWaAoFJquGkW4V8PB8-S-WgSmJZHchKWI03jlQfVthiiN7qe_94myZcr2B3CjAfmg00ekEToQAXliFjXrUX-KGVU2_r4vlU5OuQLc7pi9O0lAq7Rwwi3AQi2tqFKFNXbMSfTTvZr3lJZZoBY6Csf3KlysUKGTHEcZhxRu6kFcu-jmSB-7MS6zlvpccjKsO4_qbmC_qUv_BWX4lY9FKQJ30Iq1E1Ksg1-Y1ddiuI91u9QuD-oVomhONdT4NOz8WvP_XZaHblIA5z0XVCfPR-ou0rmY1PAfGJOr-Fe3tx4Ol7xDdCwP94A0-H46B138kr7lLOmknIOWvrOFgjd7OJD9XV0_dmZcslE_BzbpKJHr4EUBHq_Y7-GvfR7BMtCPhc64FDARP-fTg4mmKcABKxD9cWT6zrEFh41hV2sOqdnJRyQabIJ8GuiQ1Cvb8jO5OtrOSoohwbRkaC-dPujvo-nMvFBPwsEwJfjl3vGB2NnruvyMDltHvj-pd7vpdCIVa8LivoZ-lRDS1aUhZr72KpwxrsjLcWXdB4jpDodO12g4XXt49-uV7Bte8Ciaf6dSBx9Wj53mlEEKxlSOI0CGdlXUNQW_R7TSjnjVG9EIjFHhvtnjG11qokgm2ZzKs-8ajP1TvvA1e5110XVoqB5xOvKaBNBujz26ybgtSGs4wkfQeM5CoFKruhmTWjakjH3GadGVecoYR1MMv7ly609ABo_RgcliLlohR_lE2f2XUmozXF71KAV95vfQX3xBHtqnHGDxauhBE0TuOx1ZZ6lk9VLNCOQNJCwj9M1XCLmSahTh2AU-pWV5KypGhUOhTDaYKDEAZ45XTyaoMP_FT0mn_-jO0EOJj24wDCtarY3jbpD79xVPKjxAAJKuTzFtaQlASHclVIFaAxtZyzZYn4FY07FKeIc_tUzJPBvgxOKF2mT6kBGfvTZ7tkcZvD_4-BlAExNqzRACBKuP_6i5v3bDm5_XTyNehZg5Mx05EzKrcIq4yB_09w9TbtB53v3NNzI6FLl-gl9izPGJIZgKNozUma19h8424Tqn-eTGlBgSbYRVQIqUUQYpKQFFjPkcPd_05TVBT9Ymk18MF9L-jrUoLWekbtHPHeTcmkrFa4oCFriTK-fcxJS1BiF-eu8_cEYT4KQfY-qpPzIVx1p-B81dwCNvACq3K2d5JpwlWIZedVdbA';
    //localStorage.setItem('access_token', token)
    this.getAllSpareParts()
  }

  onMakeChange(event) {
    // this.ModelID = undefined;
    // this.GroupName = undefined;

    var index = this.Models.findIndex(
      (item) =>
        item.MakeID == this.MakeID && item.GroupName != undefined
    );
    if (index > -1) {
      var make = this.Models.filter(
        (item) =>
          item.MakeID == this.MakeID &&
          item.GroupName != undefined
      );
      this.groupnameCount = make.length;
    }

    if (index == -1) {
      this.groupnameCount = undefined;
    }
  }

  onSelectModel(){
    if (this.MakeID != undefined) {
      this.totalPages = this.Models.filter(item => item.ModelID == this.ModelID).length;
    }else if (this.MakeID != undefined) {
      this.totalPages = this.Models.filter(item => item.MakeID == this.MakeID).length;
    }else{
      this.totalPages = this.Models.length;
    }
  }

  onSelectMakeAndModel(){
    this.GName = null;
    if (this.MakeID != undefined && this.p == 1) {
      this.totalPages = this.Models.filter(item => item.MakeID == this.MakeID).length;
    }
    else{
      this.totalPages = this.Models.length;
    }
    if(this.ModalMakeID != undefined && this.p == 1){
      this.ModalfilteredModels = this.Models.filter(item => item.MakeID == this.ModalMakeID);
    }
  }

  openModelSelect(StatusID?: number) {
    debugger
    setTimeout(() => {
      if(StatusID == 1){
        console.log(this.Years)
        this.filteredModels = this.Models.filter(item => item.MakeID == this.DeleteModelMakeID && item.ModelID != this.DeleteModelID);
      }else{
        console.log(this.Years)
        this.filteredModels = this.Models.filter(item => item.MakeID == this.MakeID);}
    }, 10)
  }

  isNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
  
    const minValue = 0;
  
    let currentValue = parseFloat(event.target.value);
      if (charCode === 40) { 
      currentValue = Math.max(minValue, currentValue - 1);
      event.target.value = currentValue.toString(); // Update the input value
      event.preventDefault();
      return false;
    }
  
    if (
      (charCode >= 48 && charCode <= 57) || // 0-9
      charCode === 46 // Dot
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  
  
  openModel(model: any,MakeID?: number, ModelID?: number) {
      // this.Model = new Model();
      // this.joClaimsSeriesData = new Array<joClaimsSeriesData>();

    if(MakeID != undefined && ModelID != undefined){
      // this.AllCheck = false;
      // this.HModelID = ModelID;
      // this.HMakeID = MakeID;
      this.activeModelRef = this._modelService.open(model,{ size: <any>'md',backdrop : 'static'});
    }else{
      this.activeModelRef = this._modelService.open(model, {size: 'sm',backdrop : 'static'});
  }
  }

  close(){
    this.activeModelRef.close()
  }

  getAllSpareParts(){
    this._commonService.GetAllSpareParts(this.userObj.supplierID, this.pageNo).subscribe(res =>{
      this.spareParts = res['SpareParts'];
      // console.log(this.spareParts)
    })
  }

  addPats(model: any){
    this.isEdit = false;
    this.SeriesArray = [];
    this.activeAddPartModelRef = this._modelService.open(model, {size: <any>'md',backdrop : 'static'});
  }

  editModel(model, item, isEdit){
    console.log(item)
    this.isEdit = isEdit;
    this.SeriesArray = [];
    this.SeriesArray.push(item);
    this.activeediteModelRef = this._modelService.open(model, {size: <any>'md',backdrop : 'static'});
    console.log(this.SeriesArray)
  }


  getJCMainSeries(){
    if (this.ModelID != undefined) {
      debugger
      var MakeName  = this.Makes.find(item => item.MakeID == this.MakeID).MakeName;
      var ModelName  = this.Models.find(item => item.ModelID == this.ModelID).ModelCode;
      // var year;

      if (this.YearCode != undefined) {
        //  this.YearCode = this.Years.find(item => item.YearID == this.YearCode).YearCode;
         this.YearCode = this.YearCode.toString();
      }
      else{
        this.YearCode = null;
      }

      this._commonService.GetJCMainSeries(MakeName,ModelName,this.YearCode,this.GName).subscribe((res: any) =>{
        debugger;
       console.log(res);
       if (res.joClaimsSeries.length != 0){
        this.jcMainSeries = res.joClaimsSeries;
        console.log(this.jcMainSeries)
        // this._sharedService.SeriesID = res.joClaimsSeries[0].JCSeriesID;
        this.MinYear = res.MinYear;
        this.MaxYear = res.MaxYear;
        console.log(this._sharedService.SeriesID, res.joClaimsSeries[0])
       }
      },error =>{
        console.log(error);
      })
    }
    

  }

  GetJCSeriesCase(SeriesID: string, carObj: any, index: number) {
    console.log(SeriesID, carObj)
    this._commonService.GetJCSeriesCase(SeriesID, 0).subscribe((res: any) => {
      
      console.log(res)
      if (res != undefined && res.length > 0) {
        debugger;
        var index2 = res.findIndex(item => item.CorrectSeriesID == SeriesID);
        if (index2 > -1) {
          this.jCSeriesCases2 = res; 
          this.selectCorrectSeriesImage(carObj, index2);
        } else {
          this.selectCorrectSeriesImage(carObj, index);
          this.jCSeriesCases2 = []; 
          this._meta.jCSeriesCases = undefined;
        }
      } else {
        this.selectCorrectSeriesImage(carObj, index);
        this.jCSeriesCases2 = []; 
      }
  
    }, error => {
      console.log(error);
    })
  }
  
  selectCorrectSeriesImage(carObj: any, index: number) {
      this.selectedCorrectSeriesID = carObj.JCSeriesID;
    this.selectCorrectImage = carObj.CarImageEncryptedName;
  }

  toggleSelection(item: any) {
    if (this.isSelected(item)) {
      // Deselect
      this.selectedCorrectSeriesID = null;
      this.selectCorrectImage = null;
    } else {
      // Select
      this.selectedCorrectSeriesID = item.JCSeriesID;
      this.selectCorrectImage = item.ImageURL;
    }
  }
  
  isSelected(item: any): boolean {
    return item.JCSeriesID === this.selectedCorrectSeriesID && item.ImageURL === this.selectCorrectImage;
  }
  
  selectCorrectImage1: string;

  getjcSeries(SeriesID){
    this._commonService.GetJCSeriesCase(SeriesID, 0).subscribe((res: any) => {
      console.log(res)
      if (res.length > 0){
        this.jcMainSeries2 = res;
        this.jcMainSeries = []
        console.log(this.jcMainSeries2)
      } else {
        this._sharedService.SeriesID = SeriesID;
      }
       
    })
  }

  getyears(item){
    this.StartYear = item.StartYear;
    this.EndYear = item.EndYear;
  }
  
  toggleSelection2(item: any) {
    if (this.isSelected2(item)) {
      // Deselect
      this.selectedFuelType = null;

      this.selectCorrectImage1 = null;
    } else {
      // Select
      this.selectedFuelType = item.FuelType;
      this.selectCorrectImage1 = item.CarImageEncryptedName;
    }
  }
  
  isSelected2(item: any): boolean {
    return this.selectCorrectImage1 == item.CarImageEncryptedName && this.selectedFuelType === item.FuelType;
  }
  
 
  handleSelection(item: any) {
    this.toggleSelection2(item);
    if (this.isSelected2(item)) {
      this._sharedService.SeriesID = item.CorrectSeriesID;
    }
  }

  getPartsDetails(DamagePointID: number, index?: number,PageNo?:number,Name1?:string) {
          this.AutomotivePartCount = 0;
          this.tempArrayName1 = new Array<AutomotivePart>();
          this.Names1 = new Array<AutomotivePart>();
          var ap = new AutomotivePart();
          ap.DamagePoint = new Array<DamagePoint>();
          ap.PageNo = PageNo;
          ap.Name1 = Name1;
          var dp =new DamagePoint();
          dp = this.DamagePoints.find(item=> item.DamagePointID == +DamagePointID);
          ap.DamagePoint.push(dp);
          this._commonService.getPartsDetails(ap.DamagePoint,PageNo,Name1).subscribe((res: any) => {
           this.PartNames = res.AutomotivePart;
           console.log(this.PartNames, "partName");
          }, error => {
            console.log(error);
          });
      }


      mergePartModalFilter(AutomotivePart: any, Name1: string, index?: number, isSplit?: boolean) {
        debugger;
        console.log('working', AutomotivePart, Name1)
        this.PartNames = new Array<string>();
        var tempAutomotiveParts = AutomotivePart.filter(item => item.Name1 == Name1 && item.StatusID == 29);
        for (let item of tempAutomotiveParts) {
          this.PartNames.push(item.PartName);
          console.log(this.PartNames)
        }
      }

      saveCode(){
        const isDuplicate = this.SeriesArray.some(
          (existingPart) => existingPart.AutomotivePartID === this._sharedService.AutomotivePartID
        );

        const isDuplicateInSpareParts = this.spareParts.some(
          (existingPart) => existingPart.AutomotivePartID === this._sharedService.AutomotivePartID
        );
      
        if (!isDuplicate && !isDuplicateInSpareParts) {
          let arr: SeriesArray = {
            SeriesID: this._sharedService.SeriesID,
            AutomotivePartID: this._sharedService.AutomotivePartID,
            PartName: this.PartName,
            NewPrice: this.newPrice,
            UsedPrice: this.usedPrice,
            AfterMarketPrice: this.afterMarketPrice,
            Quantity: this.quantity,
            StartYear: this.StartYear,
            EndYear: this.EndYear
          };
      
          console.log(arr);
      
          this.SeriesArray.push(arr);
        } else {
          let duplicatePart = 'Duplicate part not added:' + this._sharedService.AutomotivePartID
          this._sharedService.success(duplicatePart);
        }

      }

SaveSupplierInventoryAgainstSeries(){

  let parts: partsObj = {
    UserID: this.userObj.UserID,
    SupplierID: this.userObj.supplierID,
    PartsArray: this.SeriesArray,
    IsUpdate: this.isEdit == true ? 1 : null
  }

  this._commonService.SaveSupplierInventoryAgainstSeries(parts).subscribe((res: any) =>{
    if (res == 'Part Added Successfully'){
      this._sharedService.success(res);
      this.getAllSpareParts()
      this.dismiss()
    } else if (res == 'Part Updated Successfully'){
      this._sharedService.success(res);
      this.dismissEditModel()
    }
  })

}

onSelectPart(event){
  this._sharedService.AutomotivePartID = event.AutomotivePartID;
}

dismiss(){
this.activeAddPartModelRef.close();
this.MakeID = null;
this.ModelID = null;
this.YearCode = null;
this.DamagePointNumber = null;
this.PartName = null;
this.jcMainSeries2 = [];
this.jcMainSeries = [];
}

DeleteSupplierInventoryAgainstSeries(automotivePartID: number, model: any){
  this._sharedService.AutomotivePartID = automotivePartID;
  this.activedeletePartModelRef = this._modelService.open(model, {size: <any>'sm',backdrop : 'static'});

}

deleteModel(){
  this._commonService.DeleteSupplierInventoryAgainstSeries(this.userObj.supplierID, this.userObj.UserID, this._sharedService.AutomotivePartID).subscribe((res: any) =>{
      if (res == 'Part Deleted Successfully'){
        this._sharedService.success(res);
        this.getAllSpareParts();
        this.closemodel()
      }
    
    })
  }

closemodel(){
  this._sharedService.AutomotivePartID = undefined;
  this.activedeletePartModelRef.close()
}

dismissEditModel(){
  this.activeediteModelRef.close()
}


}