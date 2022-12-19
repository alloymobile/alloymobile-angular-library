import { Component } from '@angular/core';
import { AppIcon } from 'alloymobile-library';
import IconDB from './icon-page.data.json'
@Component({
  selector: 'app-icon-page',
  templateUrl: './icon-page.component.html',
  styleUrls: ['./icon-page.component.css']
})
export class IconPageComponent {
  icons: AppIcon[];
  iconString: string;
  usageString: string;
  example: AppIcon;
  exampleData: string;
  constructor(){
    this.iconString = "";
    this.usageString = "";
    this.exampleData = "";
    this.example = new AppIcon(this.exampleData);
    this.icons = IconDB.icons.map((icon)=>new AppIcon(
      {
        id:icon.id,
        icon: icon.icon,
        size: icon.size,
        spin: icon.spin,
        className: icon.className
      }
    ))
  }

  iconClick(icon: AppIcon){
    let ico = IconDB.icons.find(i=>i.id==icon.id);
    this.iconString = JSON.stringify(ico);
    this.usageString = '<app-icon [icon]="icon"></app-icon>';
  }

  update(){
    this.example = new AppIcon(JSON.parse(this.exampleData));
  }
}
