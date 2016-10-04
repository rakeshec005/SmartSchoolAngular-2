import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



/***
 * 
 *   ALL MODULE DECLARATIONS
 */


import { HomeModule } from './home/home.module';
import { BlankModule } from './blank/blank.module';
import { ProfileModule } from './profile/profile.module';




/***
 * 
 *   COMPONENT DECLARATIONS
 */
import { studentdashboardComponent } from './studentdashboard.component';
import { sidebarComponent } from './sidebar/index';


import { HeaderModule } from './header/header.module';
import { HeaderNotificationModule } from './header-notification/headerNotification.module';


@NgModule({
    imports: [
    CommonModule, 
    RouterModule,
    HomeModule,
    BlankModule,
    ProfileModule,
    HeaderModule,
    HeaderNotificationModule,
  
    ],
   declarations: [studentdashboardComponent, sidebarComponent],
    exports: [studentdashboardComponent, sidebarComponent]
})

export class studentDashboardModule {}
