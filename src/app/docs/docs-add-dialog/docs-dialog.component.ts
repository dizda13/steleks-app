import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';
import {FileUploader} from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-docs-dialog',
  templateUrl: 'docs-dialog.component.html',
  styleUrls: ['docs-dialog.component.css']
})
export class DocsAddDialogComponent {


  repetePassword: string = '';

  contentFormControl = new FormControl('', [
    Validators.required,
    (abstractControl: AbstractControl): ValidationErrors => {
    return abstractControl.value !== this.data.newPassword ? { valid: false } : null;
  }
  ]);

  constructor(
    public dialogRef: MatDialogRef<DocsAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  change() {
    // this.contentFormControl.valid(this.repetePassword === this.data.newPassword);
  }

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
