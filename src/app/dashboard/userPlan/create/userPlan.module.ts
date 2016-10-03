import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userPlanComponent } from './userPlan.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [userPlanComponent],
    exports: [userPlanComponent]
})

export class UserPlanModule {}
