import { Component, OnInit } from '@angular/core';
import {InfoCard, InfoCardStyle} from '../common/card/infocard/infocard.model';
import {Action} from '../common/card/action.model';
import {MatDialog} from '@angular/material';
import {DocsAddDialogComponent} from './docs-add-dialog/docs-dialog.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  forumCards: InfoCard[] = [];
  pdf: string = 'https://i.gadgets360cdn.com/large/pdf_pixabay_1493877090501.jpg?output-quality=80';
  newPassword: string = '';
  constructor(public dialog: MatDialog) {
    for (let i = 0; i < 12; i++) {
      this.forumCards.push(
        new InfoCard('Download', '', false, [this.pdf],
          [new Action('Download ', () => {
          }, 'file_download'),
            new Action('Share ', () => {
            }, 'share')
          ]
        ));
    }
  }

  ngOnInit() {
  }

  onAddClick(){
    const dialogRef = this.dialog.open(DocsAddDialogComponent, {
      width: '500px',
      height: '600px',
      data: { newPassword: this.newPassword }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
