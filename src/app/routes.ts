import { Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';





export const APP_ROUTER_PROVIDERS: Routes = [
  { path: '', component: dashboardComponent },
  { path: 'login', component: loginComponent }
];

