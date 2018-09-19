import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {CammonModule} from '../common/common.module';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatTabsModule
} from '@angular/material';
import {NewsComponent} from '../common/display/news.component';
import {CreateNewsComponent} from './create/createnews.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewscontainerComponent } from './container/newscontainer.component';
import {SlideshowModule} from 'ng-simple-slideshow';

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
    MatIconModule,
    SlideshowModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule,
  ],
  declarations: [
    // NewsComponent,
    CreateNewsComponent,
    NewscontainerComponent
  ],
  exports: [
    NewsRoutingModule,
    // NewsComponent,
    CreateNewsComponent
  ]
})
export class NewsModule {
}
