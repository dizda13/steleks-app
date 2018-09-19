import {Component, OnInit} from '@angular/core';
import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {Action} from '../common/card/action.model';
import {ProfileService, UserData} from '../profile/profile.service';
import {NewsService} from '../common/news/news.service';
import {ToastService} from '../common/toast/toast.service';
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
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.profileService.getLoggedInUser().subscribe(user => {
      this.headerCard = new InfoCard(
        'Dobrodošao ' + user.firstName + '!',
        'Danas je ' + 'DATUM_TODANAS' + ' i još uvijek nemaš pojma. Danas se očekuje da se prezivaš '
        + user.lastName + '. Tvoje korisnicko ime je zajebano (' + user.username + '). Uzivaj. Sa tobom je tvoj Steleks!'
      );
    });
    this.newsService.getNews().subscribe((news: News[]) => {
      for (const singleNews of news) {
        this.cards.push(singleNews.toSummaryCard(this.router));
      }
      console.log('News: ' + news);
    });
    this.eventService.getEvents(0, 5).subscribe((events: Event[]) => {
      for (const singleEvent of events) {
        const actions: Action[] = [];
        const readMoreAction: Action = new Action('Read more', (name: string) => {
          this.router.navigate(['events', singleEvent.id]);
        });
        const registerAction: Action = new Action('Register', (name: string) => {
          console.log('REGISTERED');
          this.toastService.setMessage('Successfully registered for ' + singleEvent.title, TOAST_TYPE.SUCCESS);
        });
        actions.push(readMoreAction);
        actions.push(registerAction);
        this.forumCards.push(new InfoCard(singleEvent.title, singleEvent.shortText, false, [''], actions));
      }
    });
  }

  printOutput(val: String) {
    if (val === 'Istina') {
      console.log('TACNO JE');
    } else {
      console.log('NIJE TACNO');
    }
  }

  onAddClick() {
    this.router.navigate(['novosti']);
  }

}
