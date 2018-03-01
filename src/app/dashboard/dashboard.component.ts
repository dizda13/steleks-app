import {Component, OnInit} from '@angular/core';
import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {Action} from '../common/card/action.model';
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

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.cards.push(
      new SummaryCard('Test',
        'Testing stuff',
        (() => this.router.navigate(['novosti', '1'])),
        'https://cdn.zikvid.com/videos/aee4ecbbc253d5311f4b8d7a099086d5/thumbnails/thumb_5_1280x720.jpg'
      )
    );
    this.cards.push(new InfoCard('Dizda', 'Dizda radi ovo'));
    this.headerCard = new InfoCard(
      'Dobrodošao Dino!',
      'Danas je 27. Januar i još uvijek nemaš pojma. Očekuje se još failova danas. Sa vama je vaš Steleks!'
    );
    this.forumCards.push(new InfoCard('Dino Pisac', 'Napisano 93.\n\nTreba nekada slušati i ovu drugu muziku.'));
    this.forumCards.push(new InfoCard('Dino Govornik', 'Izrečeno 18.\n\nTreba, treba. Nisam ja dzaba govorio'));
    const actions: Action[] = [];
    const correctAction: Action = new Action('Istina', this.printOutput);
    const wrongAction: Action = new Action('Laz', this.printOutput);
    actions.push(correctAction);
    actions.push(wrongAction);
    this.cards.push(
      new InfoCard('Dizda',
        'Da li je ovo istina?',
        false,
        ['https://cdn.zikvid.com/videos/aee4ecbbc253d5311f4b8d7a099086d5/thumbnails/thumb_5_1280x720.jpg'],
        actions,
        InfoCardStyle.SmallImage
      )
    );
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
