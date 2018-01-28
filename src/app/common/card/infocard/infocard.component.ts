import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
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
    return InfoCardStyle[this.model.getStyle()];
  }

  showContentImage(): boolean {
    return this.model.getStyle() === InfoCardStyle.SmallImage;
  }

  showTopImage(): boolean {
    return this.model.getStyle() === InfoCardStyle.LargeImage;
  }

  useMarkdown(): boolean {
    return this.model.usesMd();
  }

}
