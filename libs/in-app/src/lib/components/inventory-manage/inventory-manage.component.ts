import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'inventory-app-inventory-manage',
  templateUrl: './inventory-manage.component.html',
  styleUrls: ['./inventory-manage.component.scss']
})
export class InventoryManageComponent implements OnInit {
  @Input() languages: string;
  @Input() userObj: userObject;
  items: any;
  MakeID: number;
  ModelID: number;
  DamagePoints: Array<DamagePoint>;
  tempReplacedPart: AutomotivePart;
  totalPages: number = 0;

  SupplierID = 33;

  // joClaimsSeriesData: Array<joClaimsSeriesData>;
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

  yearCode: any;
  year: any;
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
  seriesID: string;
  newPrice: number = 0;
  usedPrice: number = 0;
  afterMarketPrice: number = 0;

  MinYear: number;
  MaxYear: number;
  automotivePartID: number;
  quantity: number = 0;

  isEdit: boolean = false;

  constructor(private _modelService: NgbModal, private _sharedService: SharedService, private _commonService: CommonService, translate: TranslateService) { 
    translate.setDefaultLang('en');
    this._commonService.GetCommonMeta(81,).subscribe(res =>{
      console.log('getCoomon meta',res)
      this.Makes = res.Makes;
      this.Models = res.Models;
      this.Years = res.Years;
      this.GroupName = res.GroupName;
      this.DamagePoints = res.DamagePoints;
      console.log('damagepoints', this.DamagePoints)
    })
  }

  ngOnInit() {
    console.log(this.userObj);
    this.getAllSpareParts()
  }

  onMakeChange(event) {
    debugger
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
        this.filteredModels = this.Models.filter(item => item.MakeID == this.DeleteModelMakeID && item.ModelID != this.DeleteModelID);
      }else{
        this.filteredModels = this.Models.filter(item => item.MakeID == this.MakeID);}
    }, 10)
  }

  isNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
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
      console.log(this.spareParts)
    })
  }

  addPats(model: any){
    this.isEdit = false;
    this.SeriesArray = [];
    this.activeAddPartModelRef = this._modelService.open(model, {size: <any>'md',backdrop : 'static'});
  }

  editModel(model, item, isEdit){
    console.log(item)
    this.SeriesArray = [];
    this.isEdit = isEdit;
    this.activeediteModelRef = this._modelService.open(model, {size: <any>'md',backdrop : 'static'});
    this.SeriesArray.push(item);
  }


  getJCMainSeries(){
    if (this.ModelID != undefined) {
      debugger
      var MakeName  = this.Makes.find(item => item.MakeID == this.MakeID).MakeName;
      var ModelName  = this.Models.find(item => item.ModelID == this.ModelID).ModelCode;
      var year;

      if (this.year != undefined) {
         this.year = this.Years.find(item => item.YearID == this.year).YearCode;
         year = this.year.toString();
      }
      else{
        year = null;
      }


      this._commonService.GetJCMainSeries(MakeName,ModelName,year,this.GName).subscribe((res: any) =>{
        debugger;
       console.log(res);
       if (res.joClaimsSeries.length != 0){
        this.seriesID = res.joClaimsSeries[0].JCSeriesID;
        this.MinYear = res.MinYear;
        this.MaxYear = res.MaxYear;
        console.log(this.seriesID, res.joClaimsSeries[0])
       }
      },error =>{
        console.log(error);
      })
    }
    

  }

  getPartsDetails(DamagePointID: number, index?: number,PageNo?:number,Name1?:string) {
    debugger;
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
           console.log(res)
           this.PartNames = res.AutomotivePart
    
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

      filterPartsOnMerge(IsSelected?: boolean) {
        debugger;
    
        // this.AutomotivePartID = this.name.AutomotivePartID;
        var PartName = this.tempMergeParts.PartName;
        var index = this.AutomotiveParts.findIndex(item => item.PartName === PartName);
    
        var Name = this.automotivePart.oldAutomotivePart.Name1;
        this.name = this.AutomotiveParts[index];
    
    
        if (IsSelected == true) {
    
          if (this.name.Name2 == ' ' || this.name.Name2 == '' || this.name.Name2 == null) {
            this.name.Name2 = Name
    
          } else if (this.name.Name3 == ' ' || this.name.Name3 == '' || this.name.Name3 == null) {
            this.name.Name3 = Name
          } else if (this.name.Name4 == ' ' || this.name.Name4 == '' || this.name.Name4 == null) {
            this.name.Name4 = Name
          } else if (this.name.Name5 == ' ' || this.name.Name5 == '' || this.name.Name5 == null) {
            this.name.Name5 = Name
          } else if (this.name.Name6 == ' ' || this.name.Name6 == '' || this.name.Name6 == null) {
            this.name.Name6 = Name
          } else if (this.name.Name7 == ' ' || this.name.Name7 == '' || this.name.Name7 == null) {
            this.name.Name7 = Name
          } else if (this.name.Name8 == ' ' || this.name.Name8 == '' || this.name.Name8 == null) {
            this.name.Name8 = Name;
          }
        }
      }

      saveCode(){
  
        const isDuplicate = this.SeriesArray.some(
          (existingPart) => existingPart.AutomotivePartID === this.automotivePartID
        );

        const isDuplicateInSpareParts = this.spareParts.some(
          (existingPart) => existingPart.AutomotivePartID === this.automotivePartID
        );
      
        if (!isDuplicate && !isDuplicateInSpareParts) {
          let arr: SeriesArray = {
            SeriesID: this.seriesID,
            AutomotivePartID: this.automotivePartID,
            PartName: this.PartName,
            NewPrice: this.newPrice,
            UsedPrice: this.usedPrice,
            AfterMarketPrice: this.afterMarketPrice,
            Quantity: this.quantity
          };
      
          console.log(arr);
      
          this.SeriesArray.push(arr);
        } else {
          // Handle the case when a duplicate part is detected (show a message, etc.)
          console.log('Duplicate part not added:', this.automotivePartID);
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
    console.log(res)
    if (res == 'Part Added Successfully'){
      this.getAllSpareParts()
      this.dismiss()
    } else if (res == 'Part Updated Successfully'){
      this.dismissEditModel()
    }
  })

}

onSelectPart(event){
  console.log(event)
  this.automotivePartID = event.AutomotivePartID;
}

dismiss(){
this.activeAddPartModelRef.close()
}

DeleteSupplierInventoryAgainstSeries(automotivePartID: number, model: any){
  this.automotivePartID = automotivePartID

  this.activedeletePartModelRef = this._modelService.open(model, {size: <any>'sm',backdrop : 'static'});

}

deleteModel(){
  this._commonService.DeleteSupplierInventoryAgainstSeries(this.userObj.supplierID, this.userObj.UserID, this.automotivePartID).subscribe((res: any) =>{
      if (res == 'Part Deleted Successfully'){
        this.getAllSpareParts();
        this.closemodel()
      }
    
    })
  }

closemodel(){
  this.automotivePartID = undefined;
  this.activedeletePartModelRef.close()
}

dismissEditModel(){
  this.activeediteModelRef.close()
}


}