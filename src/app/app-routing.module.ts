import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Fallback when no prior route is matched
  // {
    // path: '',
    // component: DashboardComponent,
    // children: [
  {path: 'steleks-feed', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'događaji', loadChildren: './events/events.module#EventsModule'},
  {path: 'novosti', loadChildren: './news/news.module#NewsModule'},
  {path: 'profil', loadChildren: './profile/profile.module#ProfileModule'},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
