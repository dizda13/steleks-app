import {AfterViewInit, NgModule, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ProfileComponent],
  exports: [
    ProfileComponent,
    ProfileRoutingModule
  ]
})
export class ProfileModule {

}
