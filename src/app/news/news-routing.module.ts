import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news.component';
import {CreateNewsComponent} from './create/createnews.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'nova', component: CreateNewsComponent },
  { path: ':id', component: NewsComponent },
  { path: '', redirectTo: 'nova' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewsRoutingModule { }
