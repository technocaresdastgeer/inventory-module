import { Component } from '@angular/core';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userObj: {}

  constructor(){
    this.userObj ={
      UserID: 2,
      supplierID: 33,
      language: 'en'
    }
  }

}
