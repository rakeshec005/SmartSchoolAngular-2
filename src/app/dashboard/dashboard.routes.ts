import { Routes} from '@angular/router';




import { dashboardComponent } from './dashboard.component';
import {BlankComponent} from './blank/blank.component';
/// component
import { HomeComponent } from './home/home.component';
import { profileComponent } from './profile/profile.component';
import { settingComponent } from './setting/setting.component';



export const DashboardRoutes: Routes = [{
        path: 'dashboard',
        component: dashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: profileComponent },
            { path: 'setting', component: settingComponent },
            { path: 'blank', component: BlankComponent }

        ]}
];

