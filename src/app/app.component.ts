import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AgGridAngular} from 'ag-grid-angular';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
@ViewChild('agGrid') agGrid!: AgGridAngular;
  
  private gridApi: any;
  private gridColumnApi: any;
  private defaultColDefs: any;
  public modules: Module[] = AllCommunityModules;

rowData!: Observable<any[]>;
title: any;

defaultColDef = {
  flex: 1,
  minWidth: 100,
  editable: true,
  sortable: true,
  filter: true,
};

columnDefs = [
  { field: 'course', checkboxSelection: true},
  { field: 'room'},
  { field: 'I'},
  { field: 'II'},
  { field: 'III'},
  { field: 'IV'},
  { field: 'V'},
  { field: 'VI'}
]

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void { 
    this.rowData = this.http.get<any[]>('/assets/mock-courses.json');
  };


getSelectedRows(): void {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map(node => node.data);
  const selectedDataStringPresentation = selectedData.map(node => `${node.course} ${node.room} ${node.I} ${node.II} ${node.III} ${node.IV} ${node.V} ${node.VI} `).join(', ');

  alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

getAllRows():void{
  //as no paging setup, so the diaply row is the same as after selecting all
  let iDispayRowCount = this.agGrid.api.getDisplayedRowCount();
  alert(`iDispayRowCount: ${iDispayRowCount}\n `);

  // iterate through every node in the grid -> use each node's col to get info.  example: 'make' from the car row
  //you can see the result from console
  let iCount = 0;
  this.agGrid.api.forEachNode((rowNode, index) => {
    iCount++;
  console.log('node ' + rowNode.data.make +','+ rowNode.data.model + ',' + rowNode.data.price + ' is in the grid');
});
  
console.log('We are in here ' + iCount);
}

//add a new row and resize the table
deleteSelectedRows(): void
{
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  let iCount = selectedNodes.length;
  this.agGrid.api.removeItems(selectedNodes);

  alert(`RemoveItems: ${iCount} `);
}

//add a new row and resize the table
addARow() : void
{
  const carMake = "Tesla";
  const carModel = "Mode S";
  const carPrice = "56000";
  const car = {make: carMake, model: carModel, price: carPrice};
  this.agGrid.api.addItems([car]);

}
//add a new row and resize the table
addAEmptyRow() : void
{
  const carMake = "";
  const carModel = "";
  const carPrice = "";
  const emptyCar = {make: carMake, model: carModel, price: carPrice};
  this.agGrid.api.addItems([emptyCar]);

}

selectAllRows():void{
  this.agGrid.api.selectAll();
}
deselectAllRows():void{
  this.agGrid.api.deselectAll();
}

}
