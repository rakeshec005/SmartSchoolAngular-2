import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListUserPlanComponent } from './ListUserPlan.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [ListUserPlanComponent],
    exports: [ListUserPlanComponent]
})

export class ListUserModule { }
