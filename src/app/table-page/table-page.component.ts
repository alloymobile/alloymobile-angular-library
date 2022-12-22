import { Component } from '@angular/core';
import { AppTable } from 'alloymobile-library';
import TableDB from './table-page.data.json'
@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent {
  table: AppTable;
  constructor(){
    this.table = new AppTable(TableDB);
  }

  selectedRow(row){
    console.log(row);
  }
}
