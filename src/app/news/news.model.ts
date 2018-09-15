import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {SummaryCard} from '../common/card/summarycard/summarycard.model';
import { Image } from '../common/imagemanager/image';
import {Router} from '@angular/router';

class News {
  constructor(private _id: number,
              private _title: String,
              private _content: String,
              private _fullContent: String,
              private _images: Image[]) {
  }

  set title(value: String) {
    this._title = value;
  }

  set content(value: String) {
    this._content = value;
  }

  set fullContent(value: String) {
    this._fullContent = value;
  }

  set images(value: Image[]) {
    this._images = value;
  }

  get title(): String {
    return this._title;
  }

  get content(): String {
    return this._content;
  }

  get fullContent(): String {
    return this._fullContent;
  }

  get images(): Image[] {
    return this._images;
  }

  getStyle(): InfoCardStyle {
    if (this._images.length < 2) {
      return InfoCardStyle.LargeImage;
    } else {
      return InfoCardStyle.Slideshow;
    }
  }

  public toInfoCard(): InfoCard {
    return new InfoCard(
      this._title,
      this._content,
      true,
      this.getUrls(),
      [],
      this.getStyle()
    );
  }

  public toSummaryCard(router: Router): InfoCard {
    return new SummaryCard(
      this._title,
      this._content,
      (() => router.navigate(['novosti', this._id])),
      this.getFirstUrl()
    );
  }

  public toSummaryCardWithNoLink(): InfoCard {
    return new SummaryCard(
      this._title,
      this._content,
      null,
      this.getFirstUrl()
    );
  }

  public toFullInfoCard(): InfoCard {
    return new InfoCard(
      this._title,
      this._fullContent,
      true,
      this.getUrls(),
      [],
      this.getStyle()
    );
  }

  private getUrls(): String[] {
    const urls = new Array<String>();
    for (const img of this._images) {
      urls.push(img.url);
    }
    return urls;
  }

  private getFirstUrl(): String {
    const urls = this.getUrls();
    if (urls.length > 0) {
      return urls[0];
    }
    return '';
  }
}

export {
  News
};
