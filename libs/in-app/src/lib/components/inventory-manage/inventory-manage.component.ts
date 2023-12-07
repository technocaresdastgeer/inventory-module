import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../shared/common.service';
import { Model } from '../../models/model';
import { Make } from '../../models/make';
import { SharedService } from '../shared/shared.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'inventory-app-inventory-manage',
  templateUrl: './inventory-manage.component.html',
  styleUrls: ['./inventory-manage.component.scss']
})
export class InventoryManageComponent implements OnInit {
  @Input() languages: string;
  items: any;
  MakeID: number;
  ModelID: number;

  totalPages: number = 0;

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
  

  constructor(private _modelService: NgbModal, private _sharedService: SharedService, private _commonService: CommonService, translate: TranslateService) { 
    // inject(NgbModal)
    // console.log(this.modalService)
    translate.setDefaultLang('en');
  }

  ngOnInit() {
      this.getMakeAndModels()
  }

  getMakeAndModels(){
    this._commonService.getMakeAndModels().subscribe((res:any)=>{
      console.log(res)
      if (res) {
        this.Makes = res.Makes;
        this.Models = res.Models;
        // this._sharedService._meta.Models = res.Models;
        // this._sharedService._meta.Makes = res.Makes;
        // this.totalPages = this.Models.length;
        console.log(this.Makes, this._sharedService)
      }
      
    })
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

  clearFilter(){

  }

  close(){
    this.activeModelRef.close()
  }

  getAllSpareParts(){
    this._commonService.GetAllSpareParts(this.MakeID, this.ModelID).subscribe(res =>{
      console.log(res);
      this.spareParts = res['SpareParts'];
      console.log(this.spareParts)
    })
  }

  addPats(){

  }

}
