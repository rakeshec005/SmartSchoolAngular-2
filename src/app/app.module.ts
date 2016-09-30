import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { APP_ROUTER_PROVIDERS } from './routes';


// ALL THE COMPONENT 
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { headerNotificationComponent } from './header-notification/headerNotification.component';




// ALL THE providers


@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    dashboardComponent,
    sidebarComponent,
    headerComponent,
    footerComponent,
    headerNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    JsonpModule,
    RouterModule.forRoot(APP_ROUTER_PROVIDERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("Inside App.Modules Constructor");
  }

}
