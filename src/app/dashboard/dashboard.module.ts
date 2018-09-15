import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import { CammonModule } from '../common/common.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CammonModule,
  ],
  exports: [
  DashboardComponent,
  DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
