import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = [
    'participants',
    'startDate',
    '1',
    'X',
    '2',
    '12',
    '1X',
    'X2',
  ];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!: any[];
  test!: any[];

  selectedValues: any[] = [];
  numberValue: number = 0;
  result: number = 0;
  totalOdds: number = 0;

  // private selectedValuesSubject = new BehaviorSubject<
  //   { id: number; value: any; index: number }[]
  // >([]);
  // public selectedValues$ = this.selectedValuesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private cdref: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.http.get<any>('../../assets/offer.json').subscribe((data) => {
      // this.dataSource = data.locations;
      this.test = data.locations;
      this.cdref.detectChanges();
    });
  }

  formatParticipantNames(participants: any) {
    return `${participants.fixture.participants[0].name} <br> ${participants.fixture.participants[1].name}`;
  }

  onClick(event: any, value: any, index: any) {
    const id = event.id;
    const participants = event.fixture.participants;

    if (this.selectedValues.length === 0) {
      this.selectedValues.push({ id, value, index, participants });
      this.selectedValues = [...this.selectedValues];
      return;
    }

    if (this.selectedValues.length === 8) {
      this._snackBar.open('Cannonball!!', 'Splash', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }

    const existingIndex = this.selectedValues.findIndex(
      (item) => item.id === id
    );
    if (existingIndex !== -1) {
      if (
        this.selectedValues[existingIndex].value !== value ||
        this.selectedValues[existingIndex].index !== index
      ) {
        this.selectedValues[existingIndex].value = value;
        this.selectedValues[existingIndex].index = index;
      } else if (this.selectedValues[existingIndex].value === value) {
        this.selectedValues.splice(existingIndex, 1);
      }
    } else {
      this.selectedValues.push({ id, value, index, participants });
    }
    this.selectedValues = [...this.selectedValues];
    this.cdref.detectChanges();
  }

  calculateValue() {
    if (this.selectedValues.length === 0) {
      return;
    }
    this.result = this.selectedValues.reduce((acc, curr) => {
      return acc * curr.value;
    }, 1);

    this.totalOdds = Math.round(this.result * 100) / 100;

    this.result = Math.round(this.totalOdds * this.numberValue * 100) / 100;
  }

  onDelete(event: any) {
    this.selectedValues = this.selectedValues.filter(
      (item) => item.id !== event
    );
    this.selectedValues = [...this.selectedValues];
    this.cdref.detectChanges();
  }

  isCellClicked(id: any, index: any): boolean {
    return this.selectedValues.some(cell => cell.id === id && cell.index === index);
  }
}
