import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Image} from './image';

@Component({
  selector: 'app-imagemanager',
  templateUrl: './imagemanager.component.html',
  styleUrls: ['./imagemanager.component.css']
})
export class ImagemanagerComponent implements OnInit {

  private url: String = '';
  private images: Image[] = [
    new Image('http://thehypedgeek.com/wp-content/uploads/2017/05/one-piece.jpg'),
    new Image('https://s3.envato.com/files/74536647/envato-bg.jpg'),
    new Image('https://t00.deviantart.net/7yc0ZwaKdUaZJXr5W-rHkyxk378=/300x200/filters:fixed_height(100,100):origin()/pre00/9e94/th/pre/f/2009/362/8/9/balls_from_hand_by_dizda.jpg')
  ];

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
    this.dialogRef.close({url: this.url});
  }

  onAddClick(): void {
    this.urlFormControl.markAsTouched({onlySelf: true});
    if (this.urlFormControl.errors) {
      return;
    }
    this.images.push(new Image(this.url));
  }

  ngOnInit() {
  }

  onImageSelected(i: number) {
    this.dialogRef.close({url: this.images[i].url});
  }
}
