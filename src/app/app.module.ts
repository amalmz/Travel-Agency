import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripComponent } from './trip/trip.component';
import { FlightsComponent } from './flights/flights.component';
import { MovenComponent } from './moven/moven.component';
import { TransferComponent } from './transfer/transfer.component';
import { CircuitComponent } from './circuit/circuit.component';
import { UmrahComponent } from './umrah/umrah.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
   
    AcceuilComponent,
    TripComponent,
    FlightsComponent,
    MovenComponent,
    TransferComponent,
    CircuitComponent,
    UmrahComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
