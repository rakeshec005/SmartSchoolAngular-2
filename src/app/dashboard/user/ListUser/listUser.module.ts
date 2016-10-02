import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listUserComponent } from './listUser.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [listUserComponent],
    exports: [listUserComponent]
})

export class ListUserModule {}
