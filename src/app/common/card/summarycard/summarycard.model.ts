import {InfoCard, InfoCardStyle} from '../infocard/infocard.model';
import {Action} from '../action.model';

enum SummaryCardStyle {
  Large,
  Small
}

class SummaryCard extends InfoCard {

  constructor(title: String,
              content: String,
              readMoreCallback: (val: String) => void,
              imgLink: String = '',
              style: SummaryCardStyle = SummaryCardStyle.Large) {
    const actions: Action[] = [];
    if (readMoreCallback) {
      actions.push(new Action('Pročitaj više', readMoreCallback, 'library_books'));
    }

    let infoStyle: InfoCardStyle;
    if (style === SummaryCardStyle.Large) {
      infoStyle = InfoCardStyle.LargeImage;
    } else {
      infoStyle = InfoCardStyle.SmallImage;
    }
    console.log(imgLink);
    super(title, content, false, [imgLink], actions, infoStyle);
  }

  getStyle(): InfoCardStyle {
    return super.getStyle();
  }
}

export {
  SummaryCard,
  SummaryCardStyle,
};


