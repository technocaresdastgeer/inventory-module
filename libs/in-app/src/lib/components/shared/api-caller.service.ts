import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { SharedService } from './shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

    public baseUrl = environment.API_URL;
    public generalVehicleurl = environment.GENRAL_VEHICLE_API_URL;
    public pendingRequests: number = 0;
    public httpOptions;
  
    constructor(private _http: HttpClient,
      public _sharedService: SharedService) { }
  
    get(url: string, data?: any,loading = true): Observable<any[]> {
      this.pendingRequests++;
      if(url != 'api/Common/SearchPart' && url != 'api/Company/GetRequestMetaData' ){
      this._sharedService.loading = loading;
  
    }
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("access_token"),
        }),
        params: data
      };
      return this._http.get(this.baseUrl + url, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   if (this.pendingRequests == 0) {
        //   }
        //   this._sharedService.loading = false;
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   return throwError(e.error);
        // });
    }
  
    delete(url: string, data?: any): Observable<any[]> {
      this.pendingRequests++;
      this._sharedService.loading = true;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("access_token"),
        }),
        params: data
      };
      return this._http.delete(this.baseUrl + url, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   this._sharedService.loading = false;
        //   if (this.pendingRequests == 0) {
        //   }
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   return throwError(e.error);
        // });
    }
  
    getWithoutHeader(url: string, data?: any): Observable<any[]> {
      this.pendingRequests++;
      this._sharedService.loading = true;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("access_token"),
        })
      };
      return this._http.get(this.baseUrl + url, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   this._sharedService.loading = false;
        //   if (this.pendingRequests == 0) {
        //   }
  
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   return throwError(e.error);
        // });
    }
  
    postWithoutHeader(url: string, data: any): Observable<any[]> {
  
      this.pendingRequests++;
      this._sharedService.loading = true;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this._http.post(this.baseUrl + url, data, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   this._sharedService.loading = false;
        //   if (this.pendingRequests == 0) {
        //   }
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   // return Observable.throw(e);
        //   return throwError(e.error);
        // });
    }
  
    post(url: string, data: any): Observable<any[]> {
      debugger;
      this.pendingRequests++;
      this._sharedService.loading = true;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("access_token"),
        })
      };
      return this._http.post(this.baseUrl + url, data, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   this._sharedService.loading = false;
        //   if (this.pendingRequests == 0) {
        //   }
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   return throwError(e.error);
        // });
    }
  
  
    resetPassword(url: string, data: any): Observable<any[]> {
      this.pendingRequests++;
      this._sharedService.loading = true;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("ResetToken"),
        })
      };
      return this._http.post(this.baseUrl + url, data, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   this._sharedService.loading = false;
        //   if (this.pendingRequests == 0) {
        //   }
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   return throwError(e.error);
        // });
    }
    getVehicleData(url: string, data?: any,loading = true): Observable<any[]> {
      this.pendingRequests++;
      if(url != 'api/Common/SearchPart' && url != 'api/Company/GetRequestMetaData' ){
      this._sharedService.loading = loading;
  
    }
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("access_token"),
          'AuthorizationKey': 'G6sFhR1dA2pV8wY0qTzK3L4oC9mI7eX5bNvJUgWn'
        }),
        params: data
      };
      return this._http.get(this.generalVehicleurl + url, this.httpOptions)
        .pipe((response: any) => {
          this.pendingRequests--;
          if (this.pendingRequests == 0) {
            this._sharedService.loading = false;
          }
          return response;
        })
        // .catch(e => {
        //   this.pendingRequests--;
        //   if (this.pendingRequests == 0) {
        //   }
        //   this._sharedService.loading = false;
        //   if (e.status === 401) {
        //     this.pendingRequests=0;
        //     this._sharedService.loading = false;
        //     this.signout();
        //   }
        //   return throwError(e.error);
        // });
    }
    signout() {
      localStorage.clear();
      // this._router.navigate(['/auth/sign-in'])
    }
  }
