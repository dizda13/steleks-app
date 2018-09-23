import {Component, OnInit} from '@angular/core';
import {News} from '../../news/news.model';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../common/news/news.service';

@Component({
  selector: 'app-eventcontainer',
  templateUrl: './eventcontainer.component.html',
  styleUrls: ['./eventcontainer.component.css']
})
export class EventsContainerComponent implements OnInit {

  news: News;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const newsId = params['id'];
      this.newsService.getSingleNews(newsId).subscribe((news: News) => {
        this.news = news;
      });
    });
  }
}
