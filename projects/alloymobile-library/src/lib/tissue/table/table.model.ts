import { AppIcon } from "../../cell/icon/icon.model";


export class AppTable{
    id: string;
    className: string;
    icon: AppIcon;
    rows: Row[];
    link: string;
    constructor(response?: any){
      if(response){
        this.id = response.id ? response.id : "";
        this.className = response.className ? response.className : "table";
        this.rows = response.rows ? response.rows.map((r) => new Row(r)) : [];
        this.icon = response.icon ? new AppIcon(response.icon) : new AppIcon();
        this.link = response.link ? response.link : "";
      }else{
        this.id = "";
        this.className = 'table';
        this.rows = [];
        this.icon = new AppIcon();
        this.link = "";
      }
    }
}

export enum Action{
    ADD,
    EDIT,
    DELETE
}

export class Row{
    id: string;
    name: string;
    constructor(response?: any){
      if(response){
        this.id = response.id ? response.id : "";
        this.name = response.name ? response.name : "";
      }else{
        this.id = "";
        this.name = "";
      }
    }
}

export class RowAction extends Row{
  action: Action;
  constructor(response?: any){
    if(response){
      super(response);
      this.action =  null;
    }else{
      super();
      this.action = null;
    }
  }
}