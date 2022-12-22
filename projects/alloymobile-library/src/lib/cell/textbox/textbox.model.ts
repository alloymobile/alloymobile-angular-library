import { AppIcon } from "../icon/icon.model";

export class AppTextBox {
  id: string;
  name: string;
  className: string;
  typeName: string;
  placeholder: string;
  icon: AppIcon;
  text: string;
  constructor(response?: any) {
    if (response) {
      this.id = response.id ? response.id : '';
      this.name = response.name ? response.name : '';
      this.className = response.className ? response.className : 'input-group';
      this.typeName = response.typeName ? response.typeName : '';
      this.placeholder = response.placeholder ? response.placeholder : '';
      this.icon = response.icon ? new AppIcon(response.icon) : new AppIcon();
      this.text = response.text ? response.text : '';
    } else {
      this.id = '';
      this.name = '';
      this.className = 'input-group';
      this.typeName = '';
      this.placeholder = '';
      this.icon = new AppIcon();
      this.text =  '';
    }
  }
}