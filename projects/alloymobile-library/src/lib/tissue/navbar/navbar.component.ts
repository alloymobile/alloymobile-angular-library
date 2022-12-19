import { Component, Input } from '@angular/core';
import { AppNavBar } from './navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  _navBar: AppNavBar;
  @Input() set navBar(navBar: AppNavBar) {
  	this._navBar = navBar;
  }
  constructor(){
    this._navBar = new AppNavBar();
  }
}
