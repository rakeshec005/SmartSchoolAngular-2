'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {planModel} from '../../../models/plan';

@Component({
  selector: 'app-userPlan',
  templateUrl: "userPlan.component.html",
  styleUrls: ['userPlan.component.css'],
  providers: [],

})
export class userPlanComponent implements OnInit {

  // variable declaration
  planmodel;
  
  constructor() {
   this.planmodel = new planModel("");
  }
  ngOnInit() {
  
  }
  ngOnDestroy() {

  }

saveUserPlan(){
  console.log("In save UserPlan Page");
}


}
