import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  // {
    // path: '',
    // component: DashboardComponent,
    // children: [
      {path: 'novosti', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'događaji', loadChildren: './events/events.module#EventsModule'},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
