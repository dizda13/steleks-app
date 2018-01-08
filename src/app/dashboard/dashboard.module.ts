import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from "@angular/material";
import { CammonModule } from "../common/common.module";

@NgModule({
  imports: [
    CommonModule,
		MatCardModule,
		CammonModule
  ],
	exports: [
		DashboardComponent
	],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
