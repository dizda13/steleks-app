import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import {MatDatepickerModule, MatGridListModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import { CammonModule } from '../common/common.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    CammonModule,
    InfiniteScrollModule,
    VirtualScrollModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  declarations: [
    EventsComponent,
  ],
  exports: [
    EventsRoutingModule,
  ]
})
export class EventsModule { }
