import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';
import {FileItem, FileUploader, Headers} from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {ToastService} from '../../common/toast/toast.service';
import {TOAST_TYPE} from '../../common/toast/toast/toast-type.enum';

const URL = 'http://localhost:8080/events/ok';
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
  items: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<DocsAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.uploader.onCompleteItem = (item: FileItem, response, status, headers) => {
      if (status !== 500) {
        this.items.push(item._file.name);
      }
    };
    this.dialogRef.beforeClose().subscribe((value: any) => {
      this.dialogRef.close(this.items);
    });
  }

  onNoClick(): void {

  }

  change() {
    // this.contentFormControl.valid(this.repetePassword === this.data.newPassword);
  }
  public uploader:FileUploader = new FileUploader({
    url: URL,
    headers: [{name: 'Authorization', value: localStorage.getItem('token')}]
  });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  public procentage: number=0;

  uploadAll() {
    this.uploader.uploadAll();
    this.uploader.getNotUploadedItems();
    this.uploader.queue.forEach(item => {
      console.log(item._file.name);
    });
  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
