import { AppIcon } from "../icon/icon.model";

export class AppTextBox {
  id: string;
  name: string;
  className: string;
  type: string;
  placeholder: string;
  label: AppLabel;
  icon: AppIcon;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ? response.id : '';
      this.name = response.name ? response.name : '';
      this.className = response.className ? response.className : '';
      this.type = response.type ? response.type : '';
      this.placeholder = response.placeholder ? response.placeholder : '';
      this.label = response.label ? new AppLabel(response.label) : new AppLabel();
      this.icon = response.icon ? new AppIcon(response.icon) : new AppIcon();
    } else {
      this.id = '';
      this.name = '';
      this.className = '';
      this.type = '';
      this.placeholder = '';
      this.label = new AppLabel();
      this.icon = new AppIcon();
    }
  }
}

export class AppLabel {
  id: string;
  className: string;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ? response.id : '';
      this.className = response.className ? response.className : '';
    } else {
      this.id = '';
      this.className = '';
    }
  }
}
