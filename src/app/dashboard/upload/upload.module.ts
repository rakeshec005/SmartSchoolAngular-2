import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uploadComponent } from './upload.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [uploadComponent],
    exports: [uploadComponent]
})

export class UploadModule {}
