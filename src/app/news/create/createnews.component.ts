import {Component, OnInit} from '@angular/core';
import {News} from '../news.model';
import {InfoCard} from '../../common/card/infocard/infocard.model';
import {FormControl, Validators} from '@angular/forms';

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

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)),
  ]);

  contentFormControl = new FormControl('', [
    Validators.required,
  ]);

  formControls: FormControl[] = [this.titleFormControl, this.contentFormControl, this.urlFormControl];

  constructor() {
    this.news = new News('', '', '');
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
    console.log('TAB SWITCHED');
    console.log('title: ', this.news);
    this.generatedCard = this.news.toInfoCard();
  }
}
