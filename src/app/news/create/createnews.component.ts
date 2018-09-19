import {Component, OnInit} from '@angular/core';
import {News} from '../news.model';
import {NewsService} from '../../common/news/news.service';
import {InfoCard} from '../../common/card/infocard/infocard.model';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ImagemanagerComponent} from '../../common/imagemanager/imagemanager.component';
import {Router} from '@angular/router';

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

  constructor(public dialog: MatDialog, private newsService: NewsService, private router: Router) {
    this.news = new News(0, '', '', '', []);
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
    this.newsService.addNews(this.news).subscribe(result => {
      console.log('Got some result');
      this.router.navigate(['/steleks-feed']);
    });
  }

  onTabChanged() {
    this.generatedCard = this.news.toInfoCard();
  }

  onRemoveClicked(index: number) {
    console.log('Removing ' + index);
    this.news.images.splice(index, 1);
  }

  onAddClicked() {
    const dialogRef = this.dialog.open(ImagemanagerComponent, {
      width: '80%',
      height: '70%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result && result.img) {
        this.news.images.push(result.img);
        this.news.images = this.news.images.map(x => x);
      }
      // this.animal = result;
    });
  }
}
