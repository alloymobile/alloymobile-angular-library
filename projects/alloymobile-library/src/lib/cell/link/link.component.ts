import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppLink } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  _link: AppLink;
  @Input() set link(link: AppLink){
    this._link = link;
  }

  constructor(private router:Router) { 
    this._link = new AppLink();
  }

  ngOnInit(): void {
  }

  //redirect on click
  routeLink(lnk: any) {
    if (lnk.includes("http") || lnk.includes("https")) {
      window.location.href = lnk;
      return true;
    }
    return this.router.navigateByUrl(lnk);
  }
}
