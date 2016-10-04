import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userComponent } from './user.component';
import { FormsModule }   from '@angular/forms';
import { ListUserModule } from '../ListUser/listUser.module'
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@NgModule({
    imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    ListUserModule,
    ToasterModule
    ],
    declarations: [userComponent],
    exports: [userComponent]
})

export class UserModule {}
