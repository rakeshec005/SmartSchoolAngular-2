import { Routes} from '@angular/router';




import { dashboardComponent } from './dashboard.component';
import {BlankComponent} from './blank/blank.component';
/// component
import { HomeComponent } from './home/home.component';
import { profileComponent } from './profile/profile.component';
import { settingComponent } from './setting/setting.component';
import { userPlanComponent } from './userPlan/create/userPlan.component';
import { userComponent } from './user/CreateUser/index';


export const DashboardRoutes: Routes = [{
        path: 'dashboard',
        component: dashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: profileComponent },
            { path: 'setting', component: settingComponent },
            { path: 'blank', component: BlankComponent },
            { path: 'userPlan', component: userPlanComponent },
            { path: 'user', component: userComponent }
            

        ]}
];

