'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-userPlan',
  templateUrl: "userPlan.component.html",
  styleUrls: ['userPlan.component.css'],
  providers: [],

})
export class userPlanComponent implements OnInit {

  // variable declaration
  
  constructor() {
  
  }
  ngOnInit() {
  
  }
  ngOnDestroy() {

  }

saveUserPlan(){
  console.log("In save UserPlan Page");
}


}
