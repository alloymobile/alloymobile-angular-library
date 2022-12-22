import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppIcon } from '../../cell/icon/icon.model';
import { AppTable, Row, Action, RowAction } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  _table: AppTable;
  @Input() set table(table: AppTable){
    this._table = table;
  }
  editIcon = new AppIcon({id:1,icon:"faEdit",size:"lg",spin:false,className:""});
  deleteIcon = new AppIcon({id:2,icon:"faTrashAlt",size:"lg",spin:false,className:""});
  @Output() output: EventEmitter<RowAction> = new EventEmitter<RowAction>();

  constructor() {
    this._table = new AppTable();
  }

  ngOnInit(): void {
  }

  onClicked(row,action:Action){
    let data = new RowAction(row);
    data.action = action;
    this.output.emit(data);
  }

  capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  toString(val): string {
    return JSON.stringify(val);
  }

  get action(): typeof Action {
    return Action;
  }

}
