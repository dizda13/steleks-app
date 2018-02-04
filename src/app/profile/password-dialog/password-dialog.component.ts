import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';

@Component({
  selector: 'app-password-dialog',
  templateUrl: 'password-dialog.component.html',
  styleUrls: ['password-dialog.component.css']
})
export class PasswordDialogComponent {

  repetePassword: string = '';

  contentFormControl = new FormControl('', [
    Validators.required,
    (abstractControl: AbstractControl): ValidationErrors => {
    console.log('rep', abstractControl.value);
    console.log('new', this.data.newPassword);
    return abstractControl.value !== this.data.newPassword ? { valid: false } : null;
  }
  ]);

  constructor(
    public dialogRef: MatDialogRef<PasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  change() {
    // this.contentFormControl.valid(this.repetePassword === this.data.newPassword);
  }

}
