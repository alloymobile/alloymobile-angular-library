import { AppIcon } from "../icon/icon.model";

export class AppTextBox {
  id: string;
  name: string;
  className: string;
  typeName: string;
  placeholder: string;
  label: AppLabel;
  icon: AppIcon;
  text: string;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ? response.id : '';
      this.name = response.name ? response.name : '';
      this.className = response.className ? response.className : '';
      this.typeName = response.typeName ? response.typeName : '';
      this.placeholder = response.placeholder ? response.placeholder : '';
      this.label = response.label ? new AppLabel(response.label) : new AppLabel();
      this.icon = response.icon ? new AppIcon(response.icon) : new AppIcon();
      this.text = response.text ? response.text : '';
    } else {
      this.id = '';
      this.name = '';
      this.className = '';
      this.typeName = '';
      this.placeholder = '';
      this.label = new AppLabel();
      this.icon = new AppIcon();
      this.text = '';
    }
  }
}

export class AppLabel {
  id: string;
  text: string;
  className: string;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ? response.id : '';
      this.className = response.className ? response.className : '';
      this.text = response.text ? response.text : '';
    } else {
      this.id = '';
      this.className = '';
      this.text = '';
    }
  }
}
