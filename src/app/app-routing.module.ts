import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'moji-materijali', loadChildren: './docs/docs.module#DocsModule'},
  {path: 'steleks-feed', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'događaji', loadChildren: './events/events.module#EventsModule'},
  {path: 'novosti', loadChildren: './news/news.module#NewsModule'},
  {path: 'profil', loadChildren: './profile/profile.module#ProfileModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
