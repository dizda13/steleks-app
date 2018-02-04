import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfocardComponent} from './card/infocard/infocard.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-md';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ImagemanagerComponent } from './imagemanager/imagemanager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    SlideshowModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    InfocardComponent,
    ImagemanagerComponent,
  ],
  declarations: [
    InfocardComponent,
    ImagemanagerComponent,
  ],
  entryComponents: [
    ImagemanagerComponent,
  ]
})
export class CammonModule { }
