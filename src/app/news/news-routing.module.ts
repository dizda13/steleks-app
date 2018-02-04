import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNewsComponent} from './create/createnews.component';
import {NewscontainerComponent} from './container/newscontainer.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'nova', component: CreateNewsComponent },
  { path: ':id', component: NewscontainerComponent },
  { path: '', redirectTo: 'nova' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewsRoutingModule { }
