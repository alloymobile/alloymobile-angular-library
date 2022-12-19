import { Component, Input } from '@angular/core';
import { AppSideBar } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  _sideBar: AppSideBar;
  @Input() set sideBar(sideBar: AppSideBar) {
  	this._sideBar = sideBar;
  }
  constructor() { 
    this._sideBar = new AppSideBar();
  }
}
