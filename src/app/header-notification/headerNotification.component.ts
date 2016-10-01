'use strict';
import { Component} from '@angular/core';
import {Router} from '@angular/router'
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'headerNotification',
  templateUrl: "headerNotification.component.html",
  styleUrls: ['headerNotification.component.css']

})
export class headerNotificationComponent {

  private toasterService: ToasterService;

  constructor(toasterService: ToasterService, private _router: Router) {
    this.toasterService = toasterService;
  }

  doLogout() {
    this._router.navigate(['']);
    this.toasterService.pop('success', 'Success Logout  !!!!', 'Success Logout !!!!!!');
  }

}
