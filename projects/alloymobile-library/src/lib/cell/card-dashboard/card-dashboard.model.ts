import { AppIcon } from "../icon/icon.model";

export class AppCardDashboard {
  id: string;
  className: string;
  count: number;
  title: string;
  iconClass: string;
  icon: AppIcon;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ? response.id : '';
      this.className = response.className ? response.className : 'card card-body bg-warning bg-opacity-15 p-4 h-100';
      this.count = response.count ? response.count : 0;
      this.title = response.title ? response.title : 'Compleared cources';
      this.iconClass = response.iconClass ? response.iconClass : 'icon-lg rounded-circle bg-warning text-white mb-0';
      this.icon = response.icon ? new AppIcon(response.icon) : new AppIcon();
    } else {
      this.id = '';
      this.className = 'card card-body bg-warning bg-opacity-15 p-4 h-100';
      this.count = 0;
      this.title = 'Compleated course';
      this.iconClass = 'icon-lg rounded-circle bg-warning text-white mb-0';
      this.icon = new AppIcon();
    }
  }
}
