import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


/* ALL SERVICE DECLARATION  */
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';


import { routes } from './app.routes';





// ALL THE providers


@NgModule({
  declarations: [
  
  ],
  imports: [
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("Inside App.Modules Constructor");
  }

}
