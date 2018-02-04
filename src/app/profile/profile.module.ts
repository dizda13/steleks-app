import {AfterViewInit, NgModule, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import {PasswordDialogComponent} from './password-dialog/password-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, PasswordDialogComponent],
  exports: [
    ProfileComponent,
    ProfileRoutingModule
  ],
  entryComponents: [
    PasswordDialogComponent
  ]
})
export class ProfileModule {

}
