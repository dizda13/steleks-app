import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfocardComponent} from './card/infocard/infocard.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MarkdownModule} from 'ngx-md';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    InfocardComponent,
  ],
  declarations: [
    InfocardComponent,
  ]
})
export class CammonModule { }
