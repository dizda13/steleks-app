import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PasswordDialogComponent} from './password-dialog/password-dialog.component';
import {ToastService} from '../common/toast/toast.service';
import {TOAST_TYPE} from '../common/toast/toast/toast-type.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public isInEditMode: boolean = true;
  public newPassword: string = '';

  constructor(public dialog: MatDialog, private toastService: ToastService) {
    this.toastService.getMessage().subscribe(value => console.log(value));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordDialogComponent, {
      width: '500px',
      height: '300px',
      data: { newPassword: this.newPassword }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  changeViewMode() {
    this.isInEditMode = !this.isInEditMode;
    this.toastService.setMessage('dozda', TOAST_TYPE.SUCCESS);
  }


}
