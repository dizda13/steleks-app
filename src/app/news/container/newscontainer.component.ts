import {Component, OnInit} from '@angular/core';
import {News} from '../news.model';
import { Image } from '../../common/imagemanager/image';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../common/news/news.service';

@Component({
  selector: 'app-newscontainer',
  templateUrl: './newscontainer.component.html',
  styleUrls: ['./newscontainer.component.css']
})
export class NewscontainerComponent implements OnInit {

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
