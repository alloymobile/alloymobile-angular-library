import { Component } from '@angular/core';
import { AppButton } from 'alloymobile-library';
import ButtonDB from './button-page.data.json';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.css']
})
export class ButtonPageComponent {
  button1:AppButton;
  constructor(){
    this.button1 = new AppButton(ButtonDB.button1);
  }
}
