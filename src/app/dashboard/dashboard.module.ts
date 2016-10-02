import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { BlankModule } from './blank/blank.module';
import { ProfileModule } from './profile/profile.module';

import { dashboardComponent } from './index';

import { sidebarComponent } from './sidebar/index';

@NgModule({
    imports: [CommonModule, RouterModule],
   declarations: [dashboardComponent, sidebarComponent],
    exports: [dashboardComponent, sidebarComponent]
})

export class DashboardModule {}
