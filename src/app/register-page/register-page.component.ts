import { Component } from '@angular/core';
import { Register } from 'alloymobile-library';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  client: Register = new Register();
  constructor() { }

  ngOnInit(): void {
  }

  onRegister(client: Register){
    console.log(client);
  }
}
