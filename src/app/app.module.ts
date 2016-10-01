import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


/* ALL SERVICE DECLARATION  */
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {salaryService} from './services/salaryService';
import {roleService} from './services/roleService';
import {userService} from './services/userService';


import { APP_ROUTER_PROVIDERS } from './app.routes';
import { DASHBOARD_ROUTER_PROVIDERS } from './dashboard.routes';


// ALL THE COMPONENT 
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { headerNotificationComponent } from './header-notification/headerNotification.component';
import { blankComponent } from './blank/blank.component';
import { userComponent } from '../app/user/user.component';
import { uploadComponent } from './upload/upload.component';
import { settingComponent } from './setting/setting.component';
import { profileComponent } from './profile/profile.component';

// User

import { listUserComponent } from '../app/user/ListUser/listUser.component';

// UtilityComponent

import {autoCompleteComponent} from './utility/autoComplete.component';



// ALL THE providers


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    dashboardComponent,
    sidebarComponent,
    headerComponent,
    footerComponent,
    headerNotificationComponent,
    blankComponent,
    userComponent,
    listUserComponent,
    autoCompleteComponent,
    uploadComponent,
    settingComponent,
    profileComponent
  ],
  imports: [
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    JsonpModule,
    RouterModule.forRoot(APP_ROUTER_PROVIDERS)
  ],
  providers: [
    salaryService,
    roleService,
    userService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("Inside App.Modules Constructor");
  }

}
