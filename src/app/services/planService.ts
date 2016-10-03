import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class planService {
    constructor(private _http: Http) { }
    getPlans() {
        return this._http.get("http://localhost:4000/api/v1/userPlans").
            map(res => res.json());
    }

    createUserPlan(planmodel) {

        var headers = new Headers();
        headers.append("Content-type", "application/json");
        return this._http.post("http://localhost:4000/api/v1/userPlans/savePlan", {planmodel},{
                headers: headers
            }).map(res => res.json());


    }

}

