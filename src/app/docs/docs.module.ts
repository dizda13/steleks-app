import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import {DocsRoutingModule} from './docs.routing-module';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import {CammonModule} from '../common/common.module';
import {DocsAddDialogComponent} from './docs-add-dialog/docs-dialog.component';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShareDialogComponent} from './share-dialog/share-dialog.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CammonModule,
    MatDialogModule,
    FileUploadModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    InfiniteScrollModule,
    VirtualScrollModule,
    MatProgressBarModule
  ],
  declarations: [
    DeleteDialogComponent,
    DocsAddDialogComponent,
    DocsComponent,
    ShareDialogComponent,
  ],
  exports: [
    DeleteDialogComponent,
    DocsAddDialogComponent,
    ShareDialogComponent,
    DocsComponent,
    DocsRoutingModule,
  ],
  entryComponents: [
    DeleteDialogComponent,
    DocsAddDialogComponent,
    ShareDialogComponent
  ]
})
export class DocsModule { }
