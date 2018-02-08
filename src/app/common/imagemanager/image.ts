class Image {

  constructor(private _url: String) {

  }

  get url(): String {
    return this._url;
  }
}

export {
  Image,
};
