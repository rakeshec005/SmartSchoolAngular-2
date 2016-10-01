import { Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { sidebarComponent } from './sidebar/sidebar.component';

import { blankComponent } from './blank/blank.component';


export const APP_ROUTER_PROVIDERS: Routes = [
  { path: '', component: loginComponent},
  { path: 'dashboard', component: dashboardComponent},
  { path: 'blank', component: blankComponent},
  { path: 'sidebar', component: sidebarComponent}
  

];

