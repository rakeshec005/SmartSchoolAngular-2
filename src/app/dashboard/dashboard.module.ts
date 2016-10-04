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
import { SettingModule } from './setting/setting.module';
import { HeaderModule } from './header/header.module';
import { HeaderNotificationModule } from './header-notification/headerNotification.module';
import {UserPlanModule } from  './userPlan/create/userPlan.module';
import {UserModule } from  './user/CreateUser/user.module';



/***
 * 
 *   COMPONENT DECLARATIONS
 */
import { dashboardComponent } from './index';
import { sidebarComponent } from './sidebar/index';


@NgModule({
    imports: [
    CommonModule, 
    RouterModule,
    HomeModule,
    BlankModule,
    ProfileModule,
    SettingModule,
    HeaderModule,
    HeaderNotificationModule,
    UserPlanModule,
    UserModule
    ],
   declarations: [dashboardComponent, sidebarComponent],
    exports: [dashboardComponent, sidebarComponent]
})

export class DashboardModule {}
