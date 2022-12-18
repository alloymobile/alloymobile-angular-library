import { Component } from '@angular/core';
import { AppIcon } from 'projects/alloymobile-library/src/lib/cell/icon/icon.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alloymobile-angular-library';
  icon: AppIcon;
  constructor(){
    this.icon = new AppIcon({id:1,icon:"faApple",size:"lg",spin:false,className:""});
  }
}
