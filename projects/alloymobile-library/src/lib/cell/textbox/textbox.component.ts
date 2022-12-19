import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() output: EventEmitter<AppTextBox> = new EventEmitter<AppTextBox>();

  constructor() { 
    this._textbox = new AppTextBox();
  }

  onChange(text){
    console.log(text);
  }

}
