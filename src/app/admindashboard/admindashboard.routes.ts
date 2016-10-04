import { Routes} from '@angular/router';




import { admindashboardComponent } from './admindashboard.component';
import {BlankComponent} from './blank/blank.component';
/// component
import { HomeComponent } from './home/home.component';
import { profileComponent } from './profile/profile.component';



export const adminDashboardRoutes: Routes = [{
        path: 'admindashboard',
        component: admindashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'blank', component: BlankComponent },
            { path: 'profile', component: profileComponent }
            
            

        ]}
];

