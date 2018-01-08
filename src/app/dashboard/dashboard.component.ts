import { Component, OnInit } from '@angular/core';
import { InfoCard } from "../common/card/infocard/infocard.model";
import { Action } from "../common/card/action.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	cards: InfoCard[] = [];

  constructor() { }

  ngOnInit() {
		this.cards.push(new InfoCard("Test", "Testing stuff"));
		this.cards.push(new InfoCard("Dizda", "Dizda radi ovo"));
		let actions: Action[] = [];
		let correctAction: Action = new Action("Istina", this.printOutput);
		let wrongAction: Action = new Action("Laz", this.printOutput);
		actions.push(correctAction);
		actions.push(wrongAction);
		this.cards.push(new InfoCard("Dizda", "Da li je ovo istina?", "", actions));
  }

	printOutput(val: String) {
		if (val == "Istina") {
			console.log("TACNO JE");
		} else {
			console.log("NIJE TACNO");
		}
	}

}
