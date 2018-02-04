import {Component, OnInit} from '@angular/core';
import {News} from '../news.model';
import {InfoCard} from '../../common/card/infocard/infocard.model';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ImagemanagerComponent} from '../../common/imagemanager/imagemanager.component';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.css']
})
export class CreateNewsComponent implements OnInit {

  news: News;
  generatedCard: InfoCard;
  titleFormControl = new FormControl('', [
    Validators.required,
  ]);

  contentFormControl = new FormControl('', [
    Validators.required,
  ]);

  formControls: FormControl[] = [this.titleFormControl, this.contentFormControl];

  constructor(public dialog: MatDialog) {
    this.news = new News('', '', [
      'http://thehypedgeek.com/wp-content/uploads/2017/05/one-piece.jpg',
      'https://s3.envato.com/files/74536647/envato-bg.jpg',
      'https://t00.deviantart.net/7yc0ZwaKdUaZJXr5W-rHkyxk378=/300x200/filters:fixed_height(100,100):origin()/pre00/9e94/th/pre/f/2009/362/8/9/balls_from_hand_by_dizda.jpg'
    ]);
    this.generatedCard = this.news.toInfoCard();
  }

  ngOnInit() {
  }

  onSaveClicked() {
    this.formControls.forEach(control => control.markAsTouched({onlySelf: true}));
    for (const control of this.formControls) {
      if (control.errors) {
        return;
      }
    }
    console.log('SAVING!');
  }

  onTabChanged() {
    this.generatedCard = this.news.toInfoCard();
  }

  onRemoveClicked(index: number) {
    console.log('Removing ' + index);
    this.news.imgUrl.splice(index, 1);
  }

  onAddClicked() {
    const dialogRef = this.dialog.open(ImagemanagerComponent, {
      width: '500px',
      height: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result.url) {
        this.news.imgUrl.push(result.url);
      }
      // this.animal = result;
    });
  }
}
