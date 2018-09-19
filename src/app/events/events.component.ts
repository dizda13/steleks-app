import {Component, OnInit} from '@angular/core';
import {InfoCard} from '../common/card/infocard/infocard.model';
import {Event, EventService} from '../common/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  selectedDate: Date = new Date();
  cards: InfoCard[] = [];
  public loadMore = true;
  isLoading = false;
  events: Event[];
  page = 0;
  size = 5;
  constructor(private eventService: EventService) {
    console.log('called');
    eventService.getEvents(this.page, this.size).subscribe((value: Event[]) => {
        this.events = value;
        console.log(this.page);
        console.log(value);
        this.events.forEach((event: Event) => {
          this.cards.push(new InfoCard( event.title, event.shortText));
        });
        console.log(this.cards);
        this.page++;
    });
  }

  viewPortItems: any;
  counter = 0;

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
          someArray.push(new InfoCard(event.title, event.shortText));
        });
        this.events.concat(value);
        this.isLoading = false;
        this.page++;
        this.cards = this.cards.concat(someArray);
    });
  }
}
