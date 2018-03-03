import { Injectable } from '@angular/core';
import { delay } from 'q';
import {TOAST_TYPE} from './toast/toast-type.enum';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ToastService {

  constructor() {
  }

  private message: Subject<[string, TOAST_TYPE]> = new Subject<[string, TOAST_TYPE]>();
  private messages: [string, TOAST_TYPE][] = [];
  public getMessage(): Observable<[string, TOAST_TYPE]> {
    return this.message.asObservable();

  }

  public setMessage(message: string, toastType: TOAST_TYPE = TOAST_TYPE.INFO): void {
    this.messages.push([message, toastType]);
    if (this.messages.length === 1) {
      this.myBuffer();
    }
  }

  public async myBuffer(): Promise<void> {
    while (this.messages.length) {
      this.message.next(this.messages[0]);
      await delay(3000);
      this.messages.splice(0, 1);

    }
  }
}
