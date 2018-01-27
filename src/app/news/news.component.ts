import {Component, OnInit} from '@angular/core';
import {InfoCard} from '../common/card/infocard/infocard.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsCard: InfoCard;

  constructor() {
  }

  ngOnInit() {
    this.newsCard = new InfoCard('Vrlo vazna vijest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat eros orci, ut faucibus lorem eleifend consectetur. Nunc et semper diam. Nulla non nulla ipsum. In consectetur, velit eu congue ultrices, ligula tellus lacinia ligula, sed blandit arcu nulla at diam. Nunc vel iaculis sem. Maecenas a ante in quam dictum porttitor. Ut lacinia, tortor in convallis convallis, justo nibh imperdiet nunc, a rutrum diam lectus id purus. In hac habitasse platea dictumst. Cras sodales augue ut euismod tincidunt.\n' +
      '\n' +
      'Nulla accumsan nunc quis dui ultricies, nec rutrum dui aliquam. Duis ac nisl turpis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra metus varius ante ornare mollis. Etiam aliquet massa eu aliquam aliquet. Phasellus et est sed neque sagittis posuere. Proin ac diam sagittis urna luctus imperdiet. Curabitur cursus iaculis mi, non euismod sapien ullamcorper nec. Vivamus semper leo at magna gravida placerat. Quisque quis auctor tortor. Donec enim nisi, iaculis ultrices ultrices sed, dignissim consectetur diam.\n' +
      '\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, risus eu blandit pretium, odio mi congue ipsum, at tincidunt neque massa in lorem. Phasellus sed finibus risus. Suspendisse potenti. Phasellus nec dui id odio pulvinar consectetur eu in diam. Sed dapibus mattis leo ac eleifend. Aliquam vitae mauris vel sem elementum euismod. Vivamus ligula nisl, convallis quis auctor fringilla, eleifend ac augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras arcu leo, hendrerit in tortor quis, malesuada volutpat ligula.\n' +
      '\n' +
      'Pellentesque sit amet leo pharetra, porta ex non, posuere ex. Etiam ac lacus eu erat pharetra laoreet. Vestibulum ornare, elit quis sodales aliquet, sem diam commodo tortor, id rutrum quam arcu sed odio. Suspendisse interdum faucibus erat, eget dignissim ipsum feugiat id. Fusce a sodales dui. Aenean vel velit hendrerit, iaculis ex non, scelerisque ante. Nunc congue felis turpis, vel consequat felis aliquam non.\n' +
      '\n' +
      'Nam quis tincidunt felis. Aenean ante lectus, gravida nec magna eget, mattis gravida dolor. Morbi fermentum, magna et mattis rutrum, elit purus tincidunt nulla, non pellentesque ligula nisi id libero. In vitae erat sed sapien mollis ornare sit amet ultrices nunc. Fusce sed enim at augue consequat commodo. Proin malesuada libero dolor, sed volutpat erat consequat vitae. Cras bibendum arcu ut erat mattis iaculis. Morbi luctus pretium ex eu tincidunt. Nam hendrerit dolor et sagittis faucibus. Quisque eu porta lorem, ut fringilla ligula. Donec euismod sed est vitae imperdiet. Ut non sem dolor. Nulla auctor aliquet ex, at ultricies sapien malesuada non.');
  }

}
