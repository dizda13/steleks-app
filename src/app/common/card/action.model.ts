import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
export class Action {

	title: String;
	@Output() onClick: EventEmitter<String> = new EventEmitter();

	constructor(title: String, clickCallback: (val: String) => void) {
		this.title = title;
		this.onClick.subscribe(clickCallback);
	}

	onButtonClicked(): void {
		this.onClick.emit(this.title);
	}

}
