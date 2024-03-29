import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryManageComponent } from './components/inventory-manage/inventory-manage.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from './components/shared/pipes/translate.pipe';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [CommonModule, BrowserModule, NgxPaginationModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgSelectModule, NgbModule, RouterModule, ToastrModule.forRoot(), TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
  }
  })],
  declarations: [InventoryManageComponent, TranslatePipe],
  exports: [InventoryManageComponent]
})
export class InAppModule {}
