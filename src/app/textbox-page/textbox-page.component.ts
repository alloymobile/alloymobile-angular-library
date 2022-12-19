import { Component } from '@angular/core';
import { AppTextBox } from 'projects/alloymobile-library/src/lib/cell/textbox/textbox.model';
import TextboxDB from './textbox-page.data.json';

@Component({
  selector: 'app-textbox-page',
  templateUrl: './textbox-page.component.html',
  styleUrls: ['./textbox-page.component.css']
})
export class TextboxPageComponent {
  textbox1: AppTextBox;
  constructor(){
    this.textbox1 = new AppTextBox(TextboxDB.text1);
  }
}
