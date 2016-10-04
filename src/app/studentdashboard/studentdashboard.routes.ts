import { Routes} from '@angular/router';




import { studentdashboardComponent } from './studentdashboard.component';
import {BlankComponent} from './blank/blank.component';
/// component
import { HomeComponent } from './home/home.component';
import { profileComponent } from './profile/profile.component';



export const studentDashboardRoutes: Routes = [{
        path: 'studentdashboard',
        component: studentdashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'blank', component: BlankComponent },
            { path: 'profile', component: profileComponent }
            
            

        ]}
];

