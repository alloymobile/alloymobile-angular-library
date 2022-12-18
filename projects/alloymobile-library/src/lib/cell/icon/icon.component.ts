import { Component, Input } from '@angular/core';
import { AppIcon } from './icon.model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  _icon: AppIcon;
  @Input() set icon(icon: AppIcon) {
  	this._icon = icon;
  }

  constructor() { 
    this._icon = new AppIcon();
  }

}
