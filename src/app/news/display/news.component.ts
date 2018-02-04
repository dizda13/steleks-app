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

  constructor() {
  }

  ngOnInit() {
    if (this.model != null) {
      return;
    }
  }
}
