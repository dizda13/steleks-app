import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import {DocsRoutingModule} from './docs.routing-module';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import {CammonModule} from '../common/common.module';
import {DocsAddDialogComponent} from './docs-add-dialog/docs-dialog.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CammonModule,
    MatDialogModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DocsAddDialogComponent,
    DocsComponent,
  ],
  exports: [
    DocsAddDialogComponent,
    DocsComponent,
    DocsRoutingModule,
  ],
  entryComponents: [
    DocsAddDialogComponent
  ]
})
export class DocsModule { }
