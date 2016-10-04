import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HeaderNotificationModule } from '../header-notification/headerNotification.module';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        HeaderNotificationModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule {

}
