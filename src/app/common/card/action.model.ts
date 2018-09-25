import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
export class Action {

	title: String;
	@Output() onClick: EventEmitter<String> = new EventEmitter();
  icon: String;
	constructor(title: String, clickCallback: (val: String) => void, icon?: String) {
		this.title = title;
		this.onClick.subscribe(clickCallback);
		this.icon = icon;
	}

	onButtonClicked(): void {
		this.onClick.emit(this.title);
	}

}
