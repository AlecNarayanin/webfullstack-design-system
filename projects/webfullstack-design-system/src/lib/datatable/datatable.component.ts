import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DatatableHeader, DatatableRowProperty } from './datatable.interface';

@Component({
  selector: 'lib-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  _headers: DatatableHeader[] = []

  _data: DatatableRowProperty[][] = [];

  get headers():  DatatableHeader[] {
    return this._headers;
  }
  @Input() set headers(value:  DatatableHeader[]) {
      this._headers = value.sort( (x,y)=>{
      if(x.order > y.order) return 1;
      else if(x.order < y.order) return -1;
      else return 0;
      });
  }

  get data():  DatatableRowProperty[][]  {
    return this._data;
  }

  @Input() set data(value:  DatatableRowProperty[][] ) {
    const data :DatatableRowProperty[][] = [];
    value.forEach((row)=>{
      const rowData :DatatableRowProperty[]= []
      this.headers.forEach((header)=>{
        const currentRow = row.filter((x :any ) => x.headerName == header.name);
        if(currentRow.length > 0){
          currentRow[0].headerLabel = header.label;
          rowData.push(currentRow[0]);
        }else{
          rowData.push({headerName: header.name, value: "", headerLabel: header.label});
        }
      });
      data.push(rowData);
    });
    this._data = data;
  }

  @Input() color :string = "primary";

  @Output() clickLineEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickLine(line:any){
    this.clickLineEvent.emit(line);
  }
}
