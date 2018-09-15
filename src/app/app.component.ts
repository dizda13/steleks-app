import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterLink } from '@angular/router';
import {AuthService} from './common/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showFiller = false;
  pokazi= false;
  loggedIn= false;
  loggedInClicked= true;
  sidebarItems: string[]= [
    'Steleks feed',
    'Događaji',
    'Forum',
    'Elektrijada',
    'Moji materijali'
  ];
  username: string = 'steleks_admin';
  password: string = 'comein123';
  constructor(private loginService: AuthService) {

  }
  login() {
    console.log(this.username);
    console.log(this.password);
    this.loginService.login(this.username, this.password);
  }
  onKey(event: any, value: string) { // without type info
    this[value] = event.target.value;
  }
  ngAfterViewInit(): void {
  }
  title = 'app';
  events = [];

  showSideBar(){
    this.pokazi = !this.pokazi;
  }
}
