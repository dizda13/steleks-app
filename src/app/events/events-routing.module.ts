import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import {CreateEventComponent} from './create/createevent.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'novi',
    component: CreateEventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EventsRoutingModule { }
