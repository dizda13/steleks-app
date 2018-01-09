import { Component, OnInit, Input } from '@angular/core';
import { InfoCard, InfoCardStyle } from "./infocard.model";

@Component({
  selector: 'info-card',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

	@Input() model: InfoCard;

  constructor() { }

  ngOnInit() {
		console.log("Style: " + this.getStyle());
  }

	getStyle() : String {
		return InfoCardStyle[this.model.getStyle()];
	}

	showContentImage() : boolean {
		return this.model.getStyle() == InfoCardStyle.SmallImage;
	}

	showTopImage() : boolean {
		return this.model.getStyle() == InfoCardStyle.LargeImage;
	}

}
