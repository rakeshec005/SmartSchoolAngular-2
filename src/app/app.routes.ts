import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';
import { adminDashboardRoutes } from './admindashboard/index';
import { studentDashboardRoutes } from './studentdashboard/index';
import { LoginComponent } from './login/index';

export const routes: Routes = [
  ...DashboardRoutes,
	...adminDashboardRoutes,
	...studentDashboardRoutes,
	//...LoginRoutes
	{ path:'**', component: LoginComponent }

];

