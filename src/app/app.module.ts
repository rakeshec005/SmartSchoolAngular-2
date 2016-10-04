import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


/* ALL SERVICE DECLARATION  */
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';



import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { adminDashboardModule } from './admindashboard/admindashboard.module';

import {studentDashboardModule} from './studentdashboard/studentdashboard.module';


// ALL THE providers


@NgModule({
  declarations: [AppComponent],
  imports: [
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    LoginModule,
		DashboardModule,
    adminDashboardModule,
    studentDashboardModule
		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("Inside App.Modules Constructor");
  }

}
