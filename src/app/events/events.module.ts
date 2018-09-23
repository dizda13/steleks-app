import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatTabsModule
} from '@angular/material';
import { CammonModule } from '../common/common.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {EventService} from './../common/events/events.service';
import {CreateEventComponent} from './create/createevent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import {RouterModule} from '@angular/router';
import {EventsContainerComponent} from './container/eventcontainer.component';

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
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    SlideshowModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    EventsComponent,
    CreateEventComponent,
    EventsContainerComponent,
  ],
  exports: [
    EventsRoutingModule,
    CreateEventComponent,
    EventsContainerComponent,
  ],
  providers: [
    EventService,
  ]
})
export class EventsModule { }
