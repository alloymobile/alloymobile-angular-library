import { Component } from '@angular/core';
import { AppCardDashboard } from 'alloymobile-library';
import DashboardDB from './card-dashboard-page.json';
@Component({
  selector: 'app-card-dashboard-page',
  templateUrl: './card-dashboard-page.component.html',
  styleUrls: ['./card-dashboard-page.component.css']
})
export class CardDashboardPageComponent {
  cards: AppCardDashboard[];
  example: AppCardDashboard;
  exampleData: string;
  cardString: string;
  usageString: string;
  constructor(){
    this.cards = DashboardDB.map((card)=>new AppCardDashboard(card));
    this.exampleData = "";
    this.example = this.cards[0];
    this.cardString = JSON.stringify(DashboardDB[0]);
    this.usageString = '<app-card-dashboard [cardDashboard]="example"></app-card-dashboard>'
  }

  update(){
    this.example = new AppCardDashboard(JSON.parse(this.exampleData));
  }
}
