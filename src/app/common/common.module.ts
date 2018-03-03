import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfocardComponent} from './card/infocard/infocard.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-md';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ImagemanagerComponent } from './imagemanager/imagemanager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastComponent} from './toast/toast/toast.component';
import {ToastService} from './toast/toast.service';
import {TOAST_TYPE} from './toast/toast/toast-type.enum';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    SlideshowModule,
    MarkdownModule.forRoot(),
    MatIconModule,
  ],
  exports: [
    InfocardComponent,
    ImagemanagerComponent,
    ToastComponent,
  ],
  declarations: [
    InfocardComponent,
    ImagemanagerComponent,
    ToastComponent,
  ],
  entryComponents: [
    ImagemanagerComponent,
  ],
  providers: [
    ToastService
  ],
})
export class CammonModule { }
