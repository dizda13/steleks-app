import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-imagemanager',
  templateUrl: './imagemanager.component.html',
  styleUrls: ['./imagemanager.component.css']
})
export class ImagemanagerComponent implements OnInit {

  private url: String = '';

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)),
  ]);

  constructor(public dialogRef: MatDialogRef<ImagemanagerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDoneClick(): void {
    this.urlFormControl.markAsTouched({onlySelf: true});
    if (this.urlFormControl.errors) {
      return;
    }
    this.dialogRef.close({url: this.url});
  }

  ngOnInit() {
  }

}
