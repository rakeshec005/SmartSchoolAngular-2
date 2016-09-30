import { Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { sidebarComponent } from './sidebar/sidebar.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';



export const APP_ROUTER_PROVIDERS: Routes = [
  { path: '', component: loginComponent},
  { path: 'dashboard', component: dashboardComponent},
  { path: 'sidebar', component: sidebarComponent},
  { path: 'header', component: headerComponent},
  { path: 'footer', component: footerComponent}

];

