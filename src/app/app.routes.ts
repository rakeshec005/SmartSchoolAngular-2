import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';
import { adminDashboardRoutes } from './admindashboard/index';
import { LoginComponent } from './login/index';

export const routes: Routes = [
  ...DashboardRoutes,
	...adminDashboardRoutes,
	//...LoginRoutes
	{ path:'**', component: LoginComponent }

];

