import {Component, OnInit} from '@angular/core';
import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {Event, EventService} from '../common/events/events.service';
import {SummaryCard} from '../common/card/summarycard/summarycard.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  selectedDate: Date = new Date();
  cards: SummaryCard[] = [];
  public loadMore = true;
  isLoading = false;
  events: Event[];
  page = 0;
  size = 5;
  defulatImg = 'https://www.mancinifoods.com/site/wp-content/uploads/2018/05/no-thumbnail.png';
  constructor(private eventService: EventService, private router: Router) {
    console.log('called');
    eventService.getEvents(this.page, this.size).subscribe((value: Event[]) => {
        this.events = value;
        this.events.forEach((event: Event) => {
          this.cards.push(new SummaryCard(
            event.title,
            event.shortText,
            this.getCallback(event.id),
            event.mediaSet.length ? event.mediaSet[0] : this.defulatImg));
        });
        this.page++;
    });
  }

  viewPortItems: any;

  ngOnInit() {

  }


  onScroll(nesto: any) {
    if (!this.loadMore) {
      return;
    }
    if (nesto.end !== this.cards.length || this.isLoading) {
      return;
    }
    this.isLoading = true;
    const someArray: any[] = [];
    this.eventService.getEvents(this.page, this.size).subscribe((value: Event[]) => {
        if (value.length === 0) {
          this.loadMore = false;
        }
        value.forEach((event: Event) => {
          someArray.push(new SummaryCard(
            event.title,
            event.shortText,
            this.getCallback(event.id),
            event.mediaSet.length ? event.mediaSet[0] : this.defulatImg ));
        });
        this.events.concat(value);
        this.isLoading = false;
        this.page++;
        this.cards = this.cards.concat(someArray);
    });
  }

  getCallback(id: number) {
    return () => this.router.navigate(['događaji', id]);
  }
}
