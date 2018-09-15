import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Image} from './image';
import {ImageService} from './image.service';

@Component({
  selector: 'app-imagemanager',
  templateUrl: './imagemanager.component.html',
  styleUrls: ['./imagemanager.component.css']
})
export class ImagemanagerComponent implements OnInit {

  private url: String = '';
  private images: Image[] = [];

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)),
  ]);

  constructor(public dialogRef: MatDialogRef<ImagemanagerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private imageService: ImageService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDoneClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.urlFormControl.markAsTouched({onlySelf: true});
    if (this.urlFormControl.errors) {
      return;
    }
    this.imageService.addImages(new Image(this.url, 0)).subscribe(
      img => this.images.push(img)
    );
  }

  ngOnInit() {
    this.imageService.getAllImages().subscribe(images => {
      for (const img of images) {
        this.images.push(img);
      }
    });
  }

  onImageSelected(i: number) {
    this.dialogRef.close({url: this.images[i].url, img: this.images[i]});
  }
}
