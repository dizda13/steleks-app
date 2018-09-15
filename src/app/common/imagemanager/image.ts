class Image {

  constructor(private _url: String, private _id: number) {

  }

  get url(): String {
    return this._url;
  }

  get id(): number {
    return this._id;
  }
}

export {
  Image,
};
