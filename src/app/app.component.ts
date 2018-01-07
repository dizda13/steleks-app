import { Component } from '@angular/core';
import * as $ from 'jquery';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showFiller = false;
  pokazi:boolean=false;
  ngAfterViewInit(): void {
  }
  title = 'app';
  events = [];

  showSideBar(){
    this.pokazi=!this.pokazi;
  }
}
