import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listUserComponent } from './listUser.component';
import { FormsModule }   from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@NgModule({
    imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    ToasterModule
    ],
    declarations: [listUserComponent],
    exports: [listUserComponent]
})

export class ListUserModule {}
