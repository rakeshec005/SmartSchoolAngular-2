import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userPlanComponent } from './userPlan.component';
import { ListUserModule } from '../list/ListUserPlan.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        FormsModule,
        ListUserModule
        ],
    declarations: [userPlanComponent],
    exports: [userPlanComponent]
})

export class UserPlanModule {}
