import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import { Image } from '../common/imagemanager/image';

class News {
  constructor(private _title: String,
              private _content: String,
              private _images: Image[]) {
  }

  set title(value: String) {
    this._title = value;
  }

  set content(value: String) {
    this._content = value;
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

  private getUrls(): String[] {
    const urls = new Array<String>();
    for (const img of this._images) {
      urls.push(img.url);
    }
    return urls;
  }
}

export {
  News
};
