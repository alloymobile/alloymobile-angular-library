import { AppLink } from "../../cell/link/link.model";

export class AppSideBar {
    id: number;
    className: string;
    sideLink: AppLink[];
    constructor(response?: any) {
      if (response) {
        this.id = response.id ? response.id : 0;
        this.className = response.className ? response.className : '';
        this.sideLink = response.sideLink ? response.sideLink.map((sideLink: AppLink)=>new AppLink(
          {   id: sideLink.id,
              name: sideLink.name,
              className: sideLink.className,
              link: sideLink.link,
              icon: sideLink.icon
          }
        )) : [];
      } else {
        this.id = 0;
        this.className = '';
        this.sideLink = [];
      }
    }
}
  