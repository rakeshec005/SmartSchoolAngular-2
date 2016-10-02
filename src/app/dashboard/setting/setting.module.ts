import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { settingComponent } from './setting.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [settingComponent],
    exports: [settingComponent]
})

export class SettingModule {}
