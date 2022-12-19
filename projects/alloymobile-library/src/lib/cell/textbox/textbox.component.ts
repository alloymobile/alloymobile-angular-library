import { Component, Input } from '@angular/core';
import { AppTextBox } from './textbox.model';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
  _textbox: AppTextBox;
  @Input() set textbox(textbox: AppTextBox) {
  	this._textbox = textbox;
  }

  constructor() { 
    this._textbox = new AppTextBox();
  }

}
