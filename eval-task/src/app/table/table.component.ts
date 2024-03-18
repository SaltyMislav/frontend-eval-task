import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '../../shared/model/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data!: Observable<Location[]> | undefined;

  locations: Location[] = [];

  constructor() {}
}
