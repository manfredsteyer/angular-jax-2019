import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./flight-booking/flight-search/flight-search.component";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        // loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
        loadChildren: () => import('./flight-booking/flight-booking.module')
                                .then(m => m.FlightBookingModule)
    },
     {
        path: '**',
        redirectTo: 'home'
    }
];
