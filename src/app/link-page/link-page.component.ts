import { Component } from '@angular/core';
import { AppLink } from 'alloymobile-library';
import LinkDB from './link-page.data.json'
@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.css']
})
export class LinkPageComponent {
  link1: AppLink;
  link2: AppLink;
  constructor(){
    this.link1 = new AppLink(LinkDB.link1);
    this.link2 = new AppLink(LinkDB.link2);
  }
}
