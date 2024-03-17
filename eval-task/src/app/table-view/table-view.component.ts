import { Component } from '@angular/core';
import offer from '../../assets/offer.json';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent {
  constructor() {
    console.log(offer);
  }
}
