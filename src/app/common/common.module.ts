import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfocardComponent } from './card/infocard/infocard.component';
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
    MatCardModule,
		MatButtonModule,
	],
	exports: [
		InfocardComponent, 
	],
	declarations: [
		InfocardComponent, 
	]
})
export class CammonModule { }
