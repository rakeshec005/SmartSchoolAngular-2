import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { createRoleComponent } from './createRole.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [createRoleComponent],
    exports: [createRoleComponent]
})

export class CreateRoleModule {}
