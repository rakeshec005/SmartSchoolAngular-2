'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {planModel} from '../../../models/plan';
import {planService} from '../../../services/planService';

@Component({
  selector: 'app-userPlan',
  templateUrl: "userPlan.component.html",
  styleUrls: ['userPlan.component.css'],
  providers: [planService],

})
export class userPlanComponent implements OnInit {

  // variable declaration
  planmodel;
  successmessages: string;
  status: Number;
  success: boolean;

  constructor(private _http: planService) {
    this.planmodel = new planModel("");
  }
  ngOnInit() {

  }
  ngOnDestroy() {

  }

  saveUserPlan() {
    this._http.createUserPlan(this.planmodel).subscribe(
      data => {
        if (data.status == 200) {
          this.successmessages = data.message;
          this.status = data.status;
          this.success = data.success;
        }

      },
      error => alert(error),
      () => console.log("Faild to create UserPlan")
    );

    console.log("In save UserPlan Page" + this.planmodel.planName);
  }


}
