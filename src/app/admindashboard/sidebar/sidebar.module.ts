import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sidebarComponent } from './sideBar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [sidebarComponent],
    exports: [sidebarComponent]
})

export class SideBarModule {}
