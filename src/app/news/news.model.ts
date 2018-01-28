import {InfoCard} from '../common/card/infocard/infocard.model';

class News {
  constructor(private _title: String,
              private _content: String,
              private _imgUrl: String) {
  }

  set title(value: String) {
    this._title = value;
  }

  set content(value: String) {
    this._content = value;
  }

  set imgUrl(value: String) {
    this._imgUrl = value;
  }

  get title(): String {
    return this._title;
  }

  get content(): String {
    return this._content;
  }

  get imgUrl(): String {
    return this._imgUrl;
  }

  public toInfoCard(): InfoCard {
    return new InfoCard(
      this._title,
      this._content,
      true,
      this._imgUrl
    );
  }
}

export {
  News
};
