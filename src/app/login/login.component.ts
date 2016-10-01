'use strict';
import { Component} from '@angular/core';
import {loginModel} from '../models/loginModel';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl:"login.component.html",
  styleUrls: ['login.component.css']

})
export class loginComponent {
  
  private loginmodel;
   constructor(private _router: Router){
     this.loginmodel = new loginModel("", "");
   }
   

   doLogin(){
     console.log(""+this.loginmodel.userName);
     console.log(""+this.loginmodel.password);
     if(this.loginmodel.userName==="admin" &&this.loginmodel.password==="admin" ){
       this._router.navigate(['./dashboard']);
     }else{
       this._router.navigate(['']);
     }

   }
  
}
