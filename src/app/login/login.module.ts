import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CammonModule} from '../common/common.module';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlideshowModule} from 'ng-simple-slideshow';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login.routing-module';

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
    LoginComponent
  ],
  exports: [
    LoginComponent,
    LoginRoutingModule
  ]
})
export class LoginModule {
}
