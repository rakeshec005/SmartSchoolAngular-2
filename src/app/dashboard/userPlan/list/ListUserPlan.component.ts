'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';

import {planService} from '../../../services/planService';

@Component({
  selector: 'app-ListUserPlan',
  templateUrl: "ListUserPlan.component.html",
  styleUrls: ['ListUserPlan.component.css'],
  providers: [planService],

})
export class ListUserPlanComponent implements OnInit {

  // variable declaration
  private planLists: any;
  constructor(private _http: planService) {
   
  }
  ngOnInit() {
  this.getPlans();
  }
  ngOnDestroy() {

  }
 getPlans() {
    this._http.getPlans().subscribe(
      data => {
        this.planLists = data.results     
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }


}
