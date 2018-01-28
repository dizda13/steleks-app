import {Action} from '../action.model';

enum InfoCardStyle {
  LargeImage,
  SplitCard,
  SmallImage
}

class InfoCard {

  constructor(private title: String,
              private content: String,
              private useMd: boolean = false,
              private imgLink: String = '',
              private actions: Action[] = [],
              private style: InfoCardStyle = InfoCardStyle.LargeImage) {
  }

  getStyle(): InfoCardStyle {
    return this.style;
  }

  usesMd(): boolean {
    return this.useMd;
  }

}

export {
  InfoCard,
  InfoCardStyle
};
