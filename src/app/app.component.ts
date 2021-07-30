import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  columnDefs = [
    { field: 'course', sortable: true, filter: true, editable: true },
    { field: 'room', sortable: true, filter: true, editable: true },
    { field: 'I', sortable: true, filter: true, editable: true },
    { field: 'II', sortable: true, filter: true, editable: true },
    { field: 'III', sortable: true, filter: true, editable: true },
    { field: 'IV', sortable: true, filter: true, editable: true },
    { field: 'V', sortable: true, filter: true, editable: true },
    { field: 'VI', sortable: true, filter: true, editable: true }
];

rowData: Observable<any[]> | undefined;
  title: any;

constructor(private http: HttpClient) {
}

ngOnInit(): void {
    this.rowData = this.http.get<{course: string, room: number, I: string, II: string, III: string, IV: string, V: string, VI: string}[]>('/assets/mock-courses.json');
}
}