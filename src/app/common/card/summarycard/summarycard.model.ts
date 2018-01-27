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
    actions.push(new Action('Read more', readMoreCallback));

    let infoStyle: InfoCardStyle;
    if (style === SummaryCardStyle.Large) {
      infoStyle = InfoCardStyle.LargeImage;
    } else {
      infoStyle = InfoCardStyle.SmallImage;
    }

    super(title, content, imgLink, actions, infoStyle);
  }

  getStyle(): InfoCardStyle {
    return super.getStyle();
  }
}

export {
  SummaryCard,
  SummaryCardStyle,
};


