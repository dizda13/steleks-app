import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PasswordDialogComponent} from './password-dialog/password-dialog.component';
import {ToastService} from '../common/toast/toast.service';
import {TOAST_TYPE} from '../common/toast/toast/toast-type.enum';
import {ProfileService, UserData} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public isInEditMode: boolean = true;
  public newPassword: string = '';
  public user: UserData;
  public defaultImg: string = 'data:image/png;base64,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';

  constructor(public dialog: MatDialog, private toastService: ToastService, private profileService: ProfileService) {
    this.toastService.getMessage().subscribe(value => console.log(value));
    this.profileService.getLoggedInUser().subscribe(value => this.user = value);
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
    this.toastService.setMessage('Mod za editovanje', TOAST_TYPE.ERROR);
  }
  updateUser() {
    this.profileService.updateProfile(this.user).subscribe(value => console.log(value));
  }


}
