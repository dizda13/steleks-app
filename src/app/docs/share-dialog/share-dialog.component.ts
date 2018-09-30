import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';
import {InfoCard, InfoCardStyle} from '../../common/card/infocard/infocard.model';
import {Action} from '../../common/card/action.model';
import {ToastService} from '../../common/toast/toast.service';


@Component({
  selector: 'app-share-dialog',
  templateUrl: 'share-dialog.component.html',
  styleUrls: ['share-dialog.component.css']
})
export class ShareDialogComponent {

  allCards: InfoCard[] = [];
  cards: InfoCard[] = [];
  viewPortItems: any;
  defaultImg = 'data:image/png;base64,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';
  searchString = "";
  contentFormControl = new FormControl('', [
    Validators.required,
    (abstractControl: AbstractControl): ValidationErrors => {
      return abstractControl.value !== this.data.newPassword ? {valid: false} : null;
    }
  ]);
  timer: any;
  isLoading = false;
  constructor(public dialogRef: MatDialogRef<ShareDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toastService: ToastService) {
    for (let i = 0; i < 20; i++) {
      this.cards.push(new InfoCard('Username' + i,
        '',
        false,
        [this.defaultImg],
        [new Action('Podijeli', () => {
          const prevAction = this.cards[i].getAction();
          this.toastService.setMessage('Podijeljeno sa Username' + i)
          this.cards[i].setAction([new Action('Ne dijeli', () => {
            this.toastService.setMessage('Username ' + i + 'više nema parava na ovaj fajl');
            this.cards[i].setAction(prevAction);
          }, 'share')]);
        }, 'share')],
        InfoCardStyle.ProfileCard)
      );
    }
    this.allCards = this.cards;
  }

  onScroll(nesto: any): void {
  //  if (this.isLoading) {
  //     return;
  //   };
  //   // this.dialogRef.close();
  //   this.isLoading = true
  //   const value: any[] = ['Username', 'Username', 'Username', 'Username']
  //   const someArray: InfoCard[] = [];
  //   value.forEach((event: Event) => {
  //     someArray.push(new InfoCard('Username',
  //       '',
  //       false,
  //       [this.defaultImg],
  //       [new Action('', () => {})],
  //       InfoCardStyle.ProfileCard)
  //     );
  //   });
  //   setTimeout(() => {
  //     this.isLoading = false;
  //     // this.page++;
  //     this.cards = this.cards.concat(someArray);
  //   }, 1000);
  //   // this.events.concat(value);
  // }
  //
  // change() {
  //   // this.contentFormControl.valid(this.repetePassword === this.data.newPassword);
  }
  onKey(nesto: any) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
   this.timer = setTimeout(() => {
     console.log(this.searchString);
      this.cards = this.allCards.filter((infoCard: InfoCard) => {
        const regExp = new RegExp(this.searchString);
        console.log(regExp.test(infoCard.getTitle().toLowerCase()));
        return regExp.test(infoCard.getTitle().toLowerCase());
      });
   }, 500);
  }
}
