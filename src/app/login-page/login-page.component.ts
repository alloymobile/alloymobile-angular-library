import { Component } from '@angular/core';
import { Login } from 'projects/alloymobile-library/src/public-api';

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

  onLogin(client){}
}
