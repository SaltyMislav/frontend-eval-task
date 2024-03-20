import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Location } from './../../shared/model/model';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  // dataSource !: Location[];
  displayedColumns: string[] = ['participants', 'startDate', '1', 'X', '2', '12', '1X', 'X2'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource !: any[];
  test !: any[];

  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get<any>('../../assets/offer.json')
      .subscribe(data => {
        // this.dataSource = data.locations;
        this.test = data.locations;
        this.dataSource = ELEMENT_DATA;
        console.log(data.locations[0].leagues[0].eventDateGroups);
        this.cdref.detectChanges();
      });
  }

  formatParticipantNames(participants: any) {
    return `${participants.fixture.participants[0].name} <br> ${participants.fixture.participants[1].name}`;
  }
}
