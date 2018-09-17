import {Component, OnInit} from '@angular/core';
import {InfoCard} from '../common/card/infocard/infocard.model';
import {Event, EventService} from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  selectedDate: Date = new Date();
  cards: InfoCard[] = [];
  public isFullListDisplayed = false;
  isLoading = false;
  events: Event[];

  constructor(private event: EventService) {
    event.getEvents().subscribe((value: Event[]) => { this.events = value; });
    for (let i = 0; i < 5; i++) {
      this.counter++;
      this.cards.push(new InfoCard('Test' + this.counter, 'Testing stuff'));
    }
  }

  viewPortItems: any;
  counter = 0;

  ngOnInit() {

  }


  onScroll(nesto: any) {
    if (nesto.end !== this.cards.length || this.isLoading) {
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;

      const someArray: any[] = [];
      for (let i = 0; i < 5; i++) {
        this.counter++;
        someArray.push(new InfoCard('Test' + this.counter, 'Testing stuff'));
      }
      this.cards = this.cards.concat(someArray);
    }, 1000);
  }

}
