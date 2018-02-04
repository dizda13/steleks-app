import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {CammonModule} from '../common/common.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';
import {NewsComponent} from './display/news.component';
import {CreateNewsComponent} from './create/createnews.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewscontainerComponent } from './container/newscontainer.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CammonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [
    NewsComponent,
    CreateNewsComponent,
    NewscontainerComponent
  ],
  exports: [
    NewsRoutingModule,
    NewsComponent,
    CreateNewsComponent
  ]
})
export class NewsModule {
}
