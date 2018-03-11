abstract class BaseSingleObjectResponse<T> {

  abstract fieldName: String;

  private _embedded: Map<String, T[]>;

  private _links: Map<String, String>;

  private page: PageMetaData;

  getObjects(): T[] {
    return this._embedded.get(this.fieldName);
  }

  getPageData(): PageMetaData {
    return this.page;
  }

}

class PageMetaData {
  size: String;
  totalElements: number;
  totalPages: number;
  number: number;
}

export {
  BaseSingleObjectResponse,
  PageMetaData
};
