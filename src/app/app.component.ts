import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showFiller = false;
  pokazi:boolean=false;
  sidebarItems:string[]=[
    "Steleks feed",
    "Događaji",
    "Forum",
    "Elektrijada",
    "Moji materijali"
  ]
  ngAfterViewInit(): void {
  }
  title = 'app';
  events = [];

  showSideBar(){
    this.pokazi=!this.pokazi;
  }
}
