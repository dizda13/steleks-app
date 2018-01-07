import { Component, OnInit, Input } from '@angular/core';
import { InfoCard } from "./infocard.model";

@Component({
  selector: 'info-card',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

	@Input() model: InfoCard;

  constructor() { }

  ngOnInit() {
  }

}
