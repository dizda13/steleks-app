import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import {DocsRoutingModule} from './docs.routing-module';
import {InfoCard} from '../common/card/infocard/infocard.model';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {CammonModule} from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CammonModule,
  ],
  declarations: [
    DocsComponent,
  ],
  exports: [
    DocsComponent,
    DocsRoutingModule,
  ]
})
export class DocsModule { }
