import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlankComponent } from './blank.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BlankComponent],
    exports: [BlankComponent]
})

export class BlankModule { 
    
}
