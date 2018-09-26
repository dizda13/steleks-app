import {Component, Input, OnInit} from '@angular/core';
import {News} from './../../news/news.model';
import {InfoCard} from '../../common/card/infocard/infocard.model';
import {ToastService} from '../../common/toast/toast.service';
import {TOAST_TYPE} from '../../common/toast/toast/toast-type.enum';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ImagemanagerComponent} from '../../common/imagemanager/imagemanager.component';
import {EventService} from '../../common/events/events.service';
import {Router} from '@angular/router';

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

  constructor(public dialog: MatDialog, private eventService: EventService,
              private toastService: ToastService, private router: Router) {
    this.events = new News(0, '', '', '', []);
    this.generatedCard = this.events.toInfoCard();
  }

  ngOnInit() {
  }

  onSaveClicked() {
    this.formControls.forEach(control => control.markAsTouched({onlySelf: true}));
    for (const control of this.formControls) {
      if (control.errors) {
        this.toastService.setMessage('Cant create event. Check fields', TOAST_TYPE.ERROR);
        return;
      }
    }
    console.log('SAVING!');
    this.eventService.addEvent(this.events).subscribe(result => {
      console.log('Got some result');
      this.toastService.setMessage('Successfully created a new event!', TOAST_TYPE.SUCCESS);
      this.router.navigate(['/događaji']);
    });
  }

  onTabChanged() {
    this.generatedCard = this.events.toInfoCard();
  }

  onRemoveClicked(index: number) {
    console.log('Removing ' + index);
      this.toastService.setMessage('Removed an image from event');
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
