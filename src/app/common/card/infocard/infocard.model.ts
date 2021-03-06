import {Action} from '../action.model';

enum InfoCardStyle {
  LargeImage,
  SplitCard,
  SmallImage,
  Slideshow,
  ProfileCard,
}

class InfoCard {

  constructor(private title: String,
              private content: String,
              private useMd: boolean = false,
              private imgLinks: String[] = [''],
              private actions: Action[] = [],
              private style: InfoCardStyle = InfoCardStyle.LargeImage) {
  }

  getStyle(): InfoCardStyle {
    return this.style;
  }

  usesMd(): boolean {
    return this.useMd;
  }

  getImages(): String[] {
    return this.imgLinks;
  }

  getTitle() {
    return this.title;
  }
  setAction(actions: Action[]) {
    this.actions = actions;
  }
  getAction(){
    return this.actions;
  }

}

export {
  InfoCard,
  InfoCardStyle
};
