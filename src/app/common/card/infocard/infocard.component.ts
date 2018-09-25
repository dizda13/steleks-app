import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InfoCard, InfoCardStyle} from './infocard.model';
import {MarkdownService} from 'ngx-md';

@Component({
  selector: 'info-card',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit, OnChanges {

  @Input() model: InfoCard;

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.markdownService.renderer.blockquote = (quote: string) => {
      return `<blockquote class="dizda-quote">${quote}</blockquote>`;
    };
    console.log('Style: ' + this.getStyle());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('GOT SOME CHANGES');
  }

  getStyle(): String {
    if (this.model) {
      return InfoCardStyle[this.model.getStyle()];
    }
    return null;
  }

  showContentImage(): boolean {
    return this.model.getStyle() === InfoCardStyle.SmallImage;
  }

  showTopImage(): boolean {
    return this.model.getStyle() === InfoCardStyle.LargeImage;
  }

  showSlideShow(): boolean {
    return this.model.getStyle() === InfoCardStyle.Slideshow;
  }

  getSingleImage(): String {
    if (this.model.getImages().length === 0) {
      return '';
    } else {
      return this.model.getImages()[0];
    }
  }

  useMarkdown(): boolean {
    return this.model.usesMd();
  }

}
