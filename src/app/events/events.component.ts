import {Component, OnInit} from '@angular/core';
import {InfoCard} from '../common/card/infocard/infocard.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  selectedDate: Date = new Date();
  cards: InfoCard[] = [];
  public isFullListDisplayed: boolean = false;
  isLoading = false;

  constructor() {
    for (let i: number = 0; i < 5; i++) {
      this.counter++;
      this.cards.push(new InfoCard('Test' + this.counter, 'Testing stuff'));
    }
  }

  viewPortItems: any;
  counter: number = 0;

  ngOnInit() {

  }


  onScroll(nesto: any) {
    console.log(nesto.end);
    console.log(this.cards.length);
    console.log(this.viewPortItems);
    if (nesto.end !== this.cards.length) return;
    if (this.isLoading) return;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;

      const someArray: any[] = [];
      for (let i: number = 0; i < 5; i++) {
        this.counter++;
        someArray.push(new InfoCard('Test' + this.counter, 'Testing stuff'));
      }
      this.cards = this.cards.concat(someArray);
    }, 1000);
  }

}
