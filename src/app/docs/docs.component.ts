import { Component, OnInit } from '@angular/core';
import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {Action} from '../common/card/action.model';
import {MatDialog} from '@angular/material';
import {DocsAddDialogComponent} from './docs-add-dialog/docs-dialog.component';
import { saveAs } from 'file-saver';
import {ShareDialogComponent} from './share-dialog/share-dialog.component';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {ToastService} from '../common/toast/toast.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  forumCards: InfoCard[] = [];
  allForumCards: InfoCard[] = [];
  pdf: string = 'http://www.iconarchive.com/download/i34230/treetog/i/Documents.ico';
  newPassword: string = '';
  searchString = '';
  timer: any;
  constructor(public dialog: MatDialog, private toastService: ToastService) {
    for (let i = 0; i < 9; i++) {
      this.forumCards.push(
        new InfoCard('Fajl' + i, '', false, [this.pdf],
          [new Action('Skini ', () => {
            const blob: Blob = new Blob(['test'], { type: 'text/plain' });
            saveAs(blob, 'test.txt');
            this.toastService.setMessage('Fajl se skida');
          }, 'file_download'),
            new Action('Podijeli ', () => {
            this.share();
          }, 'share'),
            new Action('Izbriši ', () => {
              this.deleteFile('Download' + i);
            }, 'delete_forever')
          ]
        ));
    }
    this.allForumCards = this.forumCards;
  }

  ngOnInit() {
  }

  onKey (event: any) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.forumCards = this.allForumCards.filter((infoCard: InfoCard) => {
        const regExp = new RegExp(this.searchString);
        return regExp.test(infoCard.getTitle().toLowerCase());
      });
    }, 500);
  }
  share() {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      width: '500px',
      height: '700px',
      data: { newPassword: this.newPassword }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
 deleteFile(title: string) {
   const dialogRef = this.dialog.open(DeleteDialogComponent, {
     width: '500px',
     height: '150px',
     data: { title }
   });

   dialogRef.afterClosed().subscribe((result: any) => {
     if (result && result.shouldDelete) {
       this.forumCards = this.forumCards.filter((card: InfoCard) => {
         return card.getTitle() !== result.title;
       });
       this.allForumCards = this.allForumCards.filter((card: InfoCard) => {
         return card.getTitle() !== result.title;
       });
       this.toastService.setMessage('Fajl je izbrisan');
     }
   });
 }
  onAddClick() {
    const dialogRef = this.dialog.open(DocsAddDialogComponent, {
      width: '900px',
      height: '700px',
      data: { newPassword: this.newPassword }
    });

    dialogRef.afterClosed().subscribe((result: string[]) => {
      console.log(result)
      result.forEach((name: string) => {
        this.forumCards.push(
          new InfoCard(name, '', false, [this.pdf],
            [new Action('Download ', () => {
              const blob: Blob = new Blob(['test'], { type: 'text/plain' });
              saveAs(blob, 'test.txt');
            }, 'file_download'),
              new Action('Share ', () => {
                this.share();
              }, 'share'),
              new Action('Delete ', () => {
                this.deleteFile(name);
              }, 'delete_forever')
            ]
          ));
      });
      this.allForumCards = this.forumCards;
      // this.animal = result;
    });
  }
}
