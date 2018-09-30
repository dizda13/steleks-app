import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';
import {InfoCard, InfoCardStyle} from '../../common/card/infocard/infocard.model';
import {Action} from '../../common/card/action.model';


@Component({
  selector: 'app-share-dialog',
  templateUrl: 'delete-dialog.component.html',
  styleUrls: ['delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  closeDialog(shouldDelete: boolean) {
    this.dialogRef.close({shouldDelete, title: this.data.title});
  }

}
