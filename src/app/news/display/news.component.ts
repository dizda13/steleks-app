import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input('model')
  model: News;

  images: String[] = [];

  constructor() {
  }

  ngOnInit() {
    this.images.push('http://thehypedgeek.com/wp-content/uploads/2017/05/one-piece.jpg',
      'https://s3.envato.com/files/74536647/envato-bg.jpg',
      'https://t00.deviantart.net/7yc0ZwaKdUaZJXr5W-rHkyxk378=/300x200/filters:fixed_height(100,100):origin()/pre00/9e94/th/pre/f/2009/362/8/9/balls_from_hand_by_dizda.jpg');
    if (this.model != null) {
      return;
    }
  }
}
