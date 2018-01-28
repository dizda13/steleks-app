import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {CammonModule} from '../common/common.module';
import {MatCardModule} from '@angular/material';
import {NewsComponent} from './news.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CammonModule,
  ],
  declarations: [
    NewsComponent
  ],
  exports: [
    NewsRoutingModule,
    NewsComponent
  ]
})
export class NewsModule { }
