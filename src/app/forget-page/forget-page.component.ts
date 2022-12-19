import { Component } from '@angular/core';
import { Forget } from 'alloymobile-library';

@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.component.html',
  styleUrls: ['./forget-page.component.css']
})
export class ForgetPageComponent {
  client: Forget = new Forget();
  constructor() { }

  ngOnInit(): void {
  }

  onForget(client: Forget){
    console.log(client);
  }
}
