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
    { field: 'block1', sortable: true, filter: true, editable: true },
    { field: 'block2', sortable: true, filter: true, editable: true },
    { field: 'block3', sortable: true, filter: true, editable: true },
    { field: 'block4', sortable: true, filter: true, editable: true },
    { field: 'block5', sortable: true, filter: true, editable: true },
    { field: 'block6', sortable: true, filter: true, editable: true }
];

rowData: Observable<any[]> | undefined;
  title: any;

constructor(private http: HttpClient) {
}

ngOnInit(): void {
    this.rowData = this.http.get<{course: string, room: number, block1: string, block2: string, block3: string, block4: string, block5: string, block6: string}[]>('/assets/mock-courses.json');
}
}