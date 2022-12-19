import { Component } from '@angular/core';
import { AppNavBar, AppSideBar } from 'projects/alloymobile-library/src/public-api';
import AppDB from './app.data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alloymobile-angular-library';
  sideBar: AppSideBar;
  navBar: AppNavBar;
  selected = "cell";
  constructor(){
    this.sideBar = new AppSideBar(AppDB.cellBar) 
    this.navBar =  new AppNavBar(AppDB.navBar);
  }
  setActive(comp: string){
    switch(comp){
      case "cell":
        this.selected = "cell";
        this.sideBar = new AppSideBar(AppDB.cellBar) 
        break;
      case "tissue":
        this.selected = "tissue";
        this.sideBar = new AppSideBar(AppDB.tissueBar) 
        break;
      case "organ":
        this.selected = "organ";
        this.sideBar = new AppSideBar(AppDB.organBar) 
        break;      
    }
  }
}
