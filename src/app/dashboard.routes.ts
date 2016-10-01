import { Routes } from '@angular/router';
import { dashboardComponent } from './dashboard/dashboard.component';
import {blankComponent} from './blank/blank.component';





export const DASHBOARD_ROUTER_PROVIDERS: Routes = [
  { path: 'blank', component: blankComponent},
  { path: 'dashboard', component: dashboardComponent}
  
  
];

