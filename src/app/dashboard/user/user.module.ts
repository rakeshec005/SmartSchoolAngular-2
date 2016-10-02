import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userComponent } from './user.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [userComponent],
    exports: [userComponent]
})

export class UserModule {}
