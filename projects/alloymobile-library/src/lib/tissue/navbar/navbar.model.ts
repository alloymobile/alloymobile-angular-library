import { AppLink } from "../../cell/link/link.model";


export class AppNavBar {
    id: number;
    className: string;
    logo: AppLink;
    navLink: AppLink[];
    constructor(response?: any) {
      if (response) {
        this.id = response.id ? response.id : 0;
        this.className = response.className ? response.className : '';
        this.logo =  response.logo ? new AppLink(response.logo) : new AppLink();
        this.navLink = response.navLink ? response.navLink.map((navLink: AppLink)=>new AppLink(
          {   id: navLink.id,
              name: navLink.name,
              className: navLink.className,
              link: navLink.link,
              icon: navLink.icon
          }
        )) : []; 
      } else {
        this.id = 0;
        this.className = '';
        this.logo =  new AppLink();
        this.navLink = [];
      }
    }
  }
  