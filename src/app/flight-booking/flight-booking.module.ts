import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightService, DefaultFlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

const CUST_A = false;

const FLIGHT_SEARCH_COMP = (CUST_A) ? 
                              [ /*FlightSearchCustomerAComponent, X, Y, Z */] : 
                              [ FlightSearchComponent ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    PassengerSearchComponent,
    FLIGHT_SEARCH_COMP,
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    // FlightSearchCustomerAComponent
  ],
  providers: [
    {
      provide: FlightService,
      useClass: DefaultFlightService
      // useFactory: (http: HttpClient) => {
      //    console.log('factory!');
      //    if (DEBUG) {
      //       return new DummyFlightService();
      //    } else {
      //       return new DefaultFlightService(http);
      //    }
      // },
      // deps: [HttpClient]
   }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
