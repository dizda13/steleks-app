import {Component, OnInit} from '@angular/core';
import {ToastService} from '../toast.service';
import {TOAST_TYPE} from './toast-type.enum';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('toastState', [
      state('inactive', style({
        transform: 'translateY(100%)'
      })),
      state('active', style({
        transform: 'translateY(0%)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class ToastComponent implements OnInit {

  public message = '';
  public messageType: TOAST_TYPE = TOAST_TYPE.INFO;
  public state = 'inactive';

  constructor(private toastService: ToastService) {
  }

  ngOnInit() {
    this.toastService.getMessage().subscribe(value => {
      this.toggleState();
      this.message = value[0];
      this.messageType = value[1];
      setTimeout(() => {
        this.toggleState();
      }, 2000);
    });
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
