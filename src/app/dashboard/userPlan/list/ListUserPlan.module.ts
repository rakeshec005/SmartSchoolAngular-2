import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListUserPlanComponent } from './ListUserPlan.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ListUserPlanComponent],
    exports: [ListUserPlanComponent]
})

export class ListUserModule { }
