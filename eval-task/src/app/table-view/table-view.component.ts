import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Location } from '../../shared/model/model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
})
export class TableViewComponent implements OnInit{
  offer: Observable<Location[]> | undefined;

  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) {}

  ngOnInit() {
    this.offer = this.http.get<any>('../../assets/offer.json')
      .pipe(
        map((response: any) => {
          return response.locations;
        })
      );
  }
}
