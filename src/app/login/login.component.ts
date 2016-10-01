'use strict';
import { Component} from '@angular/core';
import {loginModel} from '../models/loginModel';
import {Router} from '@angular/router'
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl:"login.component.html",
  styleUrls: ['login.component.css']

})
export class loginComponent {
  
  private loginmodel;
  private toasterService: ToasterService;
   constructor(toasterService: ToasterService,private _router: Router){
     this.loginmodel = new loginModel("", "");
     this.toasterService = toasterService;
   }
   

   doLogin(){
     console.log(""+this.loginmodel.userName);
     console.log(""+this.loginmodel.password);
     if(this.loginmodel.userName==="admin" &&this.loginmodel.password==="admin" ){
       this._router.navigate(['./dashboard']);
     }else{
       this._router.navigate(['']);
       this.toasterService.pop('error', 'Authentication Failed !!!!', 'Authentication Failed !!!!!!');
     }

   }
  
}
