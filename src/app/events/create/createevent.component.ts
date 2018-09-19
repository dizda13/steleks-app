import {Component, OnInit} from '@angular/core';
import {News} from './../../news/news.model';
import {InfoCard} from '../../common/card/infocard/infocard.model';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ImagemanagerComponent} from '../../common/imagemanager/imagemanager.component';
import {EventService} from '../events.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateEventComponent implements OnInit {

  events: News;
  generatedCard: InfoCard;
  titleFormControl = new FormControl('', [
    Validators.required,
  ]);

  contentFormControl = new FormControl('', [
    Validators.required,
  ]);

  formControls: FormControl[] = [this.titleFormControl, this.contentFormControl];

  constructor(public dialog: MatDialog, private eventService: EventService) {
    this.events = new News(0, '', '', '', []);
    this.generatedCard = this.events.toInfoCard();
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
    this.eventService.addEvent(this.events).subscribe(result => {
      console.log('Got some result');
    });
  }

  onTabChanged() {
    this.generatedCard = this.events.toInfoCard();
  }

  onRemoveClicked(index: number) {
    console.log('Removing ' + index);
    this.events.images.splice(index, 1);
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
        this.events.images.push(result.img);
        this.events.images = this.events.images.map(x => x);
      }
      // this.animal = result;
    });
  }
}
