import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfocardComponent} from './card/infocard/infocard.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import {MarkdownModule} from 'ngx-md';
import {SlideshowModule} from 'ng-simple-slideshow';
import {ImagemanagerComponent} from './imagemanager/imagemanager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastComponent} from './toast/toast/toast.component';
import {ToastService} from './toast/toast.service';
import {ImageService} from './imagemanager/image.service';
import {NewsService} from './news/news.service';
import {EventService} from './events/events.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SteleksApiInterceptor} from './network/steleks-api-interceptor';
import {AuthService} from './auth.service';
import {NewsComponent} from './display/news.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    SlideshowModule,
    MarkdownModule.forRoot(),
    MatIconModule,
  ],
  exports: [
    InfocardComponent,
    ImagemanagerComponent,
    ToastComponent,
    NewsComponent
  ],
  providers: [
    ImageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SteleksApiInterceptor,
      multi: true
    },
    AuthService,
    NewsService,
    EventService,
  ],
  declarations: [
    InfocardComponent,
    ImagemanagerComponent,
    ToastComponent,
    NewsComponent,
  ],
  entryComponents: [
    ImagemanagerComponent,
  ],
})
export class CammonModule {
}
