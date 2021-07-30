import { Component } from '@angular/core';

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

  rowData = [
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
      { course: 'Toyota', room: 'Celica', block1: 'A1', block2: 'A2', block3:'A3', block4: 'A4', block5: 'B1', block6: 'B2' },
    ];
  title: any;
}