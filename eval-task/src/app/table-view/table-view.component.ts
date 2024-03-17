import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Event } from '../../shared/model/model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
})
export class TableViewComponent {
  events: Event[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('../../assets/offer.json').subscribe((data) => {
      for (const location of data.locations) {
        for (const league of location.leagues) {
          for (const eventDateGroup of league.eventDateGroups) {
            this.events.push(...eventDateGroup.events);
          }
        }
      }

      const groupedEvents = this.events.reduce(
        (acc: { [key: string]: Event[] }, event) => {
          const startDate = event.fixture.startDate.split('T')[0];
          if (acc[startDate]) {
            acc[startDate].push(event);
          } else {
            acc[startDate] = [event];
          }
          return acc;
        },
        {}
      );

      console.log(groupedEvents);

      console.log(this.events);
    });
  }
}
