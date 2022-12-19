import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppButton } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  _button: AppButton;
  @Input() set button(button: AppButton){
    this._button = button;
  }
  @Output() output: EventEmitter<AppButton>= new EventEmitter<AppButton>();
  constructor() {
    this._button = new AppButton();
  }
}
