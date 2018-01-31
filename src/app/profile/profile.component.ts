import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isInEditMode = true;

  constructor() {
  }

  changeViewMode() {
    this.isInEditMode = !this.isInEditMode;
  }


}
