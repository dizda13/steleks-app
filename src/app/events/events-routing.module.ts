import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import {CreateEventComponent} from './create/createevent.component';
import {NewscontainerComponent} from '../news/container/newscontainer.component';
import {EventsContainerComponent} from './container/eventcontainer.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'novi',
    component: CreateEventComponent,
  },
  {
    path: ':id',
    component: EventsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EventsRoutingModule { }
