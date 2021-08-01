import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  private gridApi: any;
  private gridColumnApi: any;
  private defaultColDefs: any;
  public modules: Module[] = AllCommunityModules;

rowData: Observable<any[]> | undefined;
title: any;
columnDefs: { field: string; }[];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { field: 'course'},
      { field: 'room'},
      { field: 'I'},
      { field: 'II'},
      { field: 'III'},
      { field: 'IV'},
      { field: 'V'},
      { field: 'VI'}
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100
  };

  }
  ngOnInit(): void { 
    this.rowData = this.http.get<any[]>('/assets/mock-courses.json');
  };



}
