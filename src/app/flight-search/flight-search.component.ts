import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  flights: Array<Flight> = [];
  from: string;
  to: string;
  selectedFlight: Flight;

  //private http: HttpClient;

  constructor(private http: HttpClient) { 
    // this.http = http;
  }

  ngOnInit() {
  }

  search() {
    // this.flights = [
    //   { id: 17, from: 'München', to: 'Flagranti', date: '2019-11-08T19:00+01:00', delayed: true},
    //   { id: 18, from: 'München', to: 'Kognito', date: '2019-11-08T19:30+01:00', delayed: true},
    //   { id: 19, from: 'München', to: 'Hamburg', date: '2019-11-08T19:45+01:00', delayed: true},
    // ];

    if (this.from === 'BER' || this.to === 'BER') {
      throw new Error('Flughafen wird derzeit nicht angeflogen!');
      
    }

    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', this.from).set('to', this.to);
    const headers = new HttpHeaders().set('Accepted', 'application/json');

    this.http.get<Flight[]>(url, { params, headers }).subscribe(
      flights => {
        this.flights = flights;
      },
      err => {
        console.error('err', err);
      }
    );
  }

  select(flight: Flight) {
    this.selectedFlight = flight;
  }

}
