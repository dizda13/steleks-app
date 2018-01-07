import { Action } from "../action.model";

export class InfoCard {

	constructor(private title: String,
							private content: String,
							private imgLink: String = "",
							private actions: Action[] = []) {
	}

}
