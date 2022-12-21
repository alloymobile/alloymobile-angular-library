import { Component, Input } from '@angular/core';
import { AppCardDashboard} from './card-dashboard.model'

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent {
  _cardDashboard: AppCardDashboard;
  @Input() set cardDashboard(cardDashboard: AppCardDashboard){
    this._cardDashboard = cardDashboard;
  }

  constructor() { 
    this._cardDashboard = new AppCardDashboard();
  }

}
