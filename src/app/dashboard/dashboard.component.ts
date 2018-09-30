import {Component, OnInit} from '@angular/core';
import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {Action} from '../common/card/action.model';
import {ProfileService, UserData} from '../profile/profile.service';
import {NewsService} from '../common/news/news.service';
import {ToastService} from '../common/toast/toast.service';
import {AuthService} from '../common/auth.service';
import {TOAST_TYPE} from '../common/toast/toast/toast-type.enum';
import {Event, EventService} from '../common/events/events.service';
import {News} from '../news/news.model';
import {SummaryCard} from '../common/card/summarycard/summarycard.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: InfoCard[] = [];
  forumCards: InfoCard[] = [];
  headerCard: InfoCard;

  constructor(private router: Router, private profileService: ProfileService,
              private newsService: NewsService, private eventService: EventService,
              private toastService: ToastService,
              private authService: AuthService) {
    this.toastService.getMessage().subscribe(value => console.log(value));
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.profileService.getLoggedInUser().subscribe(user => {
        this.headerCard = new InfoCard(
          'Dobrodošao ' + user.firstName + '!',
          'Danas je ' + '19. Mart 2018.' + ' Da li ste spremni za STEM games? Početak se bliži. Uživajte. Sa Vama je Vaš Steleks.'
        );
      });
    } else {
        this.headerCard = new InfoCard(
          'Dobrodošli na Steleks web.',
          'Danas je ' + '19. Mart 2018.' + ' Da li ste član Steleksa? Ulogujte se sa vašim podacima klikom na dugme u lijevom meniju.'
        );
    }
    this.newsService.getNews().subscribe((news: News[]) => {
      for (const singleNews of news) {
        this.cards.push(singleNews.toSummaryCard(this.router));
      }
      console.log('News: ' + news);
    });
    this.eventService.getEvents(0, 5).subscribe((events: Event[]) => {
      for (const singleEvent of events) {
        const actions: Action[] = [];
        const readMoreAction: Action = new Action('Pročitaj više', (name: string) => {
          this.router.navigate(['događaji', singleEvent.id]);
        });
        const registerAction: Action = new Action('Prijavi se', (name: string) => {
          console.log('REGISTERED');
          this.toastService.setMessage('Uspješna prijava na događaj: ' + singleEvent.title, TOAST_TYPE.SUCCESS);
        });
        actions.push(readMoreAction);
        actions.push(registerAction);
        this.forumCards.push(new InfoCard(singleEvent.title, singleEvent.shortText, false, [''], actions));
      }
    });
  }

  onAddClick() {
    this.router.navigate(['novosti']);
  }

  shouldShowAddButton() {
    return this.authService.isLoggedIn();
  }

}
