import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userPlanComponent } from './userPlan.component';
import { ListUserModule } from '../list/ListUserPlan.module';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        ListUserModule
        ],
    declarations: [userPlanComponent],
    exports: [userPlanComponent]
})

export class UserPlanModule {}
