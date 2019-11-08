import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';

// Token
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}


@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accepted', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }


}


@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'München', to: 'Flagranti', date: '2019-11-08T19:00+01:00', delayed: true},
      { id: 18, from: 'München', to: 'Kognito', date: '2019-11-08T19:30+01:00', delayed: true},
      { id: 19, from: 'München', to: 'Hamburg', date: '2019-11-08T19:45+01:00', delayed: true},
    ]);
  }


}
