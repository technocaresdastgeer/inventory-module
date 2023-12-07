import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
// import { formatDate } from "@angular/common";
import { environment } from '../../environment/environment';
import { User } from '../../models/user';
import { PartsMeta } from '../../models/PartsMeta';
import { DraftData } from '../../models/Request-Draft/draft-data';
import { RequestDraft } from '../../models/Request-Draft/request-draft';
import { Accident } from '../../models/accident';
import { AccidentCarCost } from '../../models/accident-car-cost';
import { City } from '../../models/city';
import { CommonMeta } from '../../models/common-meta';
import { Company } from '../../models/company';
import { ICEmployee } from '../../models/ic-employee';
import { Make } from '../../models/make';
import { Model } from '../../models/model';
import { PartBranch } from '../../models/part-branch';
import { Workshop } from '../../models/workshop';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  SeriesID: string;
  loading = false;
  baseURL = environment.API_URL;
  baseUIURL = environment.UI_URL;
  AutoScoreCustomerUI = environment.AutoScoreCustomerUI;
  baseDoozApiURL = environment.API_DOOZ_STORAGE_URL;
  user: User;
  language = 'ar';
  accidentID: number = undefined;
  employeeID: number = undefined;
  workshopID: number = undefined;
  showFilter = 0;
  requestedPartID: number;
  quotationPartID: number;
  accidentPartID: number;
  currentTab = undefined;
  currentPage: number;
  searchQuery: string;
  MakeID: number;
  ModelID: number;
  YearID: number;
  WorkshopID: number;
  paginationLimit = 8;
  scale: string
  employeeList: Array<ICEmployee>;
  companyAccidents: Array<Accident>;
  adminEmployeeList: Array<User>;
  requests: Array<Request>;
  _meta: CommonMeta;
  partBranches: Array<PartBranch>;
  StartDate: Date | string;
  EndDate: Date | string;
  ApprovalStartDate: Date | string;
  ApprovalEndDate: Date | string;
  status = 6;
  substatus = 8;
  supStatus: number = 0;
  workshop: Workshop;
  Cities: Array<City>;
  saveDemand: Subject<number> = new Subject<number>();
  notifyRequestChange: Subject<number> = new Subject<number>();
  // request-list screen
  requestStatus: number = 6;
  requestSubstatus: number = 8;
  requestPageNo: number = 1;
  // request history screen
  requestHistoryStatus: number = 26;
  requestHistoryPageNo: number = 1;
  requestHistorySubStatus: number = 8 ;
  // IC screen
  IClistStatus: number = 1;
  IClistPageNo: number = 1;
  // WSList
  WSlistStatus: number = 1;
  WSlistPageNo: number = 1;
  //PS-list
  PSlistStatus: number =1;
  PSlistPageNo: number = 1;
  // accident status
  accidentStatus: number = 20;
  accidentPageNo: number = 1;
  //PS quotation list
  PSQuotationStatus: number =13;
  PSQuotationPageNo: number = 1;
  //Parts list
  partsListStatus: number = 29;
  partsListPageNo: number = 1;
  pageNo:number = 1;
  partslist : PartsMeta;
  DamagePointID: number=20;
  workshopStatus: number;
  workshopPageNo: number;
  AccidentNo: string;
  RequestNo: number;
  CompanyID: number;
  TReportStatus: number = 1;
  accidentReportObj: AccidentCarCost;
  accidentCarReportPageNumber: number = 1;
  accidentCarHistoryReportPageNumber: number = 1;
  requestOfferAnalysisReportPageNumber: number = 1;
  Companies: Array<Company>;
  IsExcel: Boolean;
  //tab Status:
  TabStatus: number = 1;
  jcSeriesStatus: number = 1;
  jcSeriesPageNo: number = 1;
  icDashboardCompanyID: number;
  IsTNnotification:boolean = false;
  UserID: number;
  TechnicalNotesStatusID: number;
  historyMakeID:number;
  historyModelID:number;
  historyYearID:number;
  historySearchQuery:string;
  DraftPartID: number;
  draftStatus:number= 34;
  draftPageNo:number=1;
  draftRequest:Array<RequestDraft>;
  PendingDraft:number;
  RequestCreated:number;
  RejectedDraft:number;
  draftAccidentID: number;
  draftAccidentNo:string;
  draftCompanyID:number;
  DraftID: number;
  toastID:number;
  MakeIDList: Array<number>;
  ModelIDList: Array<number>;
  ImageCount: Array<any>;
  LocalImagesCountDataJSON: any;
  LocalImagesCountDataObj : Array<any>;
  ImgCount: any;
  CompanyTypeID:number;
  InspektLabToken:  string;
  draftdataAI: DraftData;
  AIDoozURL = environment.AIDOOZURL;
  AICaseID: string;
  CustomerRequestID: number;
  ServiceID:number;
  CountryID: number = 2;
  CountryName:string;
  filterCountryID:number = environment.COUNTRYID; //for bahrain
  InspectionDoozAPIURL: string = environment.INSPECTIONDOOZAPIURL;
  AIServiceID: number;
  AutomotivePartID: number;
  
  public _totalSum = new BehaviorSubject<number>(0);
  public selectedItems: Map<number, number> = new Map<number, number>();

    constructor(public translate: TranslateService) {
    this.currentPage = 1;
    this.ImageCount = new Array<any>();
    this.LocalImagesCountDataObj = new Array<any>();
    if (localStorage.getItem('user') != undefined && localStorage.getItem('user') != "undefined") {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    if (localStorage.getItem('shubeddaklang') == null) {
      // this.changeLanguage('ar');
    }
    else {
      // this.changeLanguage(localStorage.getItem('shubeddaklang'));

    }
    //console.log(this.user.featurePermissions[0]);

  }

  /**
   * save selected value Technical report
   * @param newValue 
   * @param isChecked 
   */

  updateTotalSum(newValue: number, isChecked: boolean, requestId: number) {

  // Check if the item exists in the map
  if (isChecked) {
    this.selectedItems.set(requestId, newValue);
  } else {
    this.selectedItems.delete(requestId);
  }

  const newTotal = Array.from(this.selectedItems.values()).reduce((sum, value) => sum + value, 0);
  this._totalSum.next(newTotal);
  }

  // Success Type
  // public success(message: string, optional?: string) {
  //   debugger;
  //   this._toastr.clear(this.toastID);
  //   if (optional != undefined){
  //     this._toastr.success(this.translate.instant(message) + ' ' + this.translate.instant(optional));
  //    this.toastID = this._toastr.success(this.translate.instant(message) + ' ' + this.translate.instant(optional)).toastId;
  //   }
  //   else {
  //     this._toastr.success(this.translate.instant(message));
  //   }
  // }

  // warning Type
  // warning(message: string) {
  //   this._toastr.clear(this.toastID);
  //   this.toastID = this._toastr.warning(this.translate.instant(message)).toastId;
  // }

  // // error Type
  // error(message: string) {
  //   this._toastr.clear(this.toastID);
  //   this._toastr.error(this.translate.instant(message));
  // }

  // info(message: string) {
  //   this._toastr.info(this.translate.instant(message));
  // }

  isUserLogin() {

    if (this.user != undefined && this.user.access_token != undefined && this.user.access_token != '' && this.user.Id != undefined && this.user.Id != '') {
      return true;
    }
    else {
      return false;
    }
  }

  // backClicked() {
  //   debugger;
  //   var currentrout=this._location.path();
  //   var array=currentrout.split('/view-request?queryParam');
  //   if(array.length>1 && this._location.back() == undefined)
  //   {
  //     this._route.navigate([array[0]]);
  //   }
  //   else{

  //   this._location.back();
  //   }
  // }
  // draftbackClicked() {
  //   debugger;
  //   var currentrout=this._location.path();
  //   var array=currentrout.split('/view-draft?DraftID');
  //   if(array.length>1 && this._location.back() == undefined)
  //   {
  //     this._route.navigate([array[0]]);
  //   }
  //   else{

  //   this._location.back();
  //   }
  // }

  // goBackIfExists(route: string) {
  //   // if (this._location) {
  //   this._location.back();
  //   // } else {
  //   //   this._route.navigate([route]);
  //   // }
  // }

  toggleFilter() {
    this.showFilter === 0 ? this.showFilter = 1 : this.showFilter = 0;
  }

  trackByFn(index) {
    return index;
  }

  public validateOnlyText(event: any) {
    return !((event.charCode >= 1 && event.charCode <= 7) || (event.charCode >= 9 && event.charCode <= 31) || (event.charCode >= 33 && event.charCode <= 64) || (event.charCode >= 91 && event.charCode <= 96) || (event.charCode >= 123 && event.charCode <= 126));
  }

  public validateText(event: any) {
    return !((event.charCode >= 1 && event.charCode <= 7) || (event.charCode >= 9 && event.charCode <= 31) || (event.charCode >= 33 && event.charCode <= 44) || (event.charCode >= 58 && event.charCode <= 64) || (event.charCode >= 91 && event.charCode <= 96) || (event.charCode >= 123 && event.charCode <= 126));
  }

  public validateNumber(event: any) {
    return !((event.charCode >= 1 && event.charCode <= 7) || (event.charCode >= 9 && event.charCode <= 31) || (event.charCode >= 33 && event.charCode <= 44) || (event.charCode == 47) || (event.charCode >= 58 && event.charCode <= 126));
  }


  public validateEmail(event: any) {
    return !((event.charCode >= 1 && event.charCode <= 7) || (event.charCode >= 9 && event.charCode <= 44) || (event.charCode == 47) || (event.charCode >= 58 && event.charCode <= 63) || (event.charCode >= 91 && event.charCode <= 96) || (event.charCode >= 123 && event.charCode <= 126));
  }

  // changeLanguage(language: string) {
  //   this.language = language;
  //   this.translate.use(language);
  //   this.translate.setDefaultLang(language);
  //   localStorage.setItem('shubeddaklang', language);
  // }

  updateTab(number: number) {
    this.currentTab = number;
  }
  // hideScoll() {
  //   $('body').css({
  //     'overflow': 'hidden'
  //   });
  // }
  // showScroll() {
  //   $('body').css({
  //     'overflow': 'auto'
  //   });
  // }

  getDate(createdOn: Date, biddingHours: number) {
    createdOn = new Date(createdOn);
    return createdOn.setHours(createdOn.getHours() + biddingHours);
  }

  checkBiddingHours(publishedOn: Date, biddingHours: number) {

    publishedOn = new Date(publishedOn);
    if (biddingHours > 0.5) {
      var date = new Date(publishedOn.setHours(publishedOn.getHours() + biddingHours));
    }
   else{
    var date = new Date(publishedOn.setMinutes(publishedOn.getMinutes() + 30));
   }
    var newDate = new Date();
    if (date <= newDate) {
      return false;
    } else {
      return true;
    }
  }

  CheckInputCharacters(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode != 8) {
      if (unicode == 32 || unicode >= 65 && unicode <= 90 || unicode >= 97 && unicode <= 122 || unicode == 44 || unicode == 42)
        return true;
      else {
        if ((unicode < 48 || unicode > 57) && (unicode < 0x0600 || unicode > 0x06FF)) //if not a number or arabic
          return false;
      }
    }
  }




  makeSearchFn(term: string, make: Make) {
    debugger
    if (term == undefined) {
      return make;
    } else {
      term = term.toLocaleLowerCase();
      var result =   make.MakeName.toLowerCase().indexOf(term) > -1 ||  (make.ArabicMakeName != undefined ? (make.ArabicMakeName.indexOf(term) > -1 ): false);
      return result;
    }
  }

  modelSearchFn(term: string, model: Model) {
    debugger
    if (term == undefined) {
      return model;
    } else {
      term = term.toLocaleLowerCase();
      return model.ModelCode.toLowerCase().indexOf(term) > -1 || (model.ArabicModelName != undefined ? ( model.ArabicModelName.indexOf(term) > -1) : false);
    }
  }
  companySearchFn(term: string, company: Company) {
    debugger
    if (term == undefined) {
      return company;
    } else {
      term = term.toLocaleLowerCase();
      return company.CompanyName.toLowerCase().indexOf(term) > -1 || (company.CompanyName != undefined ? ( company.CompanyName.indexOf(term) > -1) : false);
    }
  }
  DateConversion(Date: any){
        var datearray = Date.toString().split("-");
        var newDate = datearray[2]+'-'+parseInt(datearray[1])+'-'+parseInt(datearray[0])
        return newDate;
  }
  DateReverseConversion(Date: any){
    var date = Date.toString().split("T");
    var datearray = date[0].toString().split("-");
    var newDate = datearray[2]+'-'+parseInt(datearray[1])+'-'+parseInt(datearray[0])
    return newDate;
  }

  hasFeaturePermission(permissionNumber:number){
    debugger;
    var index = this.user.featurePermissions.findIndex(x=> x.FeatureID == permissionNumber && x.IsApproved == true);
    if(index > -1){
      return true;
    }else{
      return false;
    }

  }

  hasUserPermission(permissionNumber:number){
    debugger;
    var index = this.user.UserPermissions.findIndex(x=> x.PermissionID == permissionNumber && x.IsChecked == true);
    if(index > -1){
      return true;
    }else{
      return false;
    }

  }


}
