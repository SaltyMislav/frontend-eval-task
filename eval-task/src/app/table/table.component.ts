import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '../../shared/model/model';
import { Observable, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  dataSource !: [];

  displayedColumns: string[] = ['name'];

  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get<any>('../../assets/offer.json')
      .subscribe(data => {
        console.log(data);
        console.log(data.locations);
        console.log(data.locations[0].leagues);
        this.dataSource = data.locations[0].leagues;
        this.cdref.detectChanges();
      });
  }
}
