import { Component } from '@angular/core';
import { Login } from 'alloymobile-library';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  client: Login = new Login();
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(client: Login){
    console.log(client);
  }
}
