/**
 * Created by admin on 06/06/2017.
 */
import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../common/auth.service';
import {until} from 'selenium-webdriver';
import elementTextContains = until.elementTextContains;
import {ProfileService, UserData} from '../profile/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {

  @Output() outUser = new EventEmitter<UserData>();
  username: string = "steleks_admin";
  passoword: string = "comein123";
  user: UserData;
  constructor(private loginService: AuthService, private profileService: ProfileService, private router: Router) {

  }

  getPass(event: any) {
    this.passoword = event.target.value;
  }

  getUser(event: any) {
    this.username = event.target.value;
  }

  login() {
    this.loginService.login(this.username, this.passoword).flatMap((nesto: any) => {
      return this.profileService.getLoggedInUser();
    }).subscribe((value => {
      this.user = <UserData>value; this.outUser.emit(this.user);
      this.router.navigate(['/steleks-feed']);
    }));
  }
}
