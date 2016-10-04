import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { headerNotificationComponent } from './headerNotification.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [headerNotificationComponent],
    exports: [headerNotificationComponent]
})

export class HeaderNotificationModule { 
    
}
