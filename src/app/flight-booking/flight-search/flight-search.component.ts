import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService, DummyFlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    // { provide: FlightService, useClass: DummyFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  flights: Array<Flight> = [];
  from: string;
  to: string;
  selectedFlight: Flight;
  basket: object = {
    "3": true,
    "5": true
  };

  //private http: HttpClient;

  constructor(private flightService: FlightService) { 
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

    // if (this.from === 'BER' || this.to === 'BER') {
    //   throw new Error('Flughafen wird derzeit nicht angeflogen!');

    // }
    this.flightService.find(this.from, this.to).subscribe(
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
