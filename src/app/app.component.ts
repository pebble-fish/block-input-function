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
  @ViewChild('agGrid') agGrid: AgGridAngular | undefined;
  private gridApi: any;
  private gridColumnApi: any;
  private defaultColDefs: any;
  public modules: Module[] = AllCommunityModules;

rowData: Observable<any[]> | undefined;
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

}
