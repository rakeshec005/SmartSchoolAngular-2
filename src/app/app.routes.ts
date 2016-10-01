import { Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { userComponent } from '../app/user/user.component';
import { blankComponent } from './blank/blank.component';
import { uploadComponent } from './upload/upload.component';
import { settingComponent } from './setting/setting.component';
import { profileComponent } from './profile/profile.component';

export const APP_ROUTER_PROVIDERS: Routes = [
  { path: '', component: loginComponent},
  { path: 'dashboard', component: dashboardComponent},
  { path: 'blank', component: blankComponent},
  { path: 'sidebar', component: sidebarComponent},
  { path: 'upload', component: uploadComponent },
  { path: 'setting', component: settingComponent },
  { path: 'profile', component: profileComponent },
  

];

