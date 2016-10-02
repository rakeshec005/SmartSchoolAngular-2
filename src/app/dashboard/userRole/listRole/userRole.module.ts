import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoleComponent } from './userRole.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [userRoleComponent],
    exports: [userRoleComponent]
})

export class UserRoleModule {}
