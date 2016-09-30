'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {userService} from '../services/userService';

@Component({
  selector: 'app-autoComplete',
  template: `
         <div class="container">
            <div class="col-lg-12">
              <label for="user">Select User</label>
              <input id="user" type="text" class="form-control" [(ngModel)]=query (keyup)=filter() placeholder="Enter your text to Search....">
              
            </div>
            <div class="suggestions" *ngIf="filteredList.length > 0">
                <ul *ngFor="let item of filteredList">
                    <li >
                        <a (click)="select(item)">{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>  	
        `,
      styleUrls: ['autoComplete.component.css'],
      providers: [userService]


})
export class autoCompleteComponent implements OnInit {

  public query = '';
  public usersList:any;
  private  filterUsersList = [];
  public filteredList = [];
  public elementRef;
  constructor(private _http: userService) {
    //this.elementRef = myElement;
  }
  ngOnInit() {
    this.getUsers();
  }
   getUsers() {
    this._http.getUsers().subscribe(
      data => {
        this.usersList = data.results
         for(var i=0;i< this.usersList.length;i++){
           this.filterUsersList.push(this.usersList[i].firstName);

         }
         
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }
  filter() {
    if (this.query !== "") {
      this.filteredList = this.filterUsersList.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        //return el.indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }





}
