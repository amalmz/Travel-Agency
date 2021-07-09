import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FlightsComponent } from './flights/flights.component';
import { TripComponent } from './trip/trip.component';
import { MovenComponent } from './moven/moven.component';
import { TransferComponent } from './transfer/transfer.component';
import { CircuitComponent } from './circuit/circuit.component';
import { UmrahComponent } from './umrah/umrah.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{path:'images',component:ImagesComponent},
{path:'acceuil',component:AcceuilComponent},
{path:'flights',component:FlightsComponent},
{path:'trip',component:TripComponent},
{path:'moven',component:MovenComponent},
{path:'transfer',component:TransferComponent},
{path:'circuit',component:CircuitComponent},
{path:'umrah',component:UmrahComponent},
{path:'contact',component:ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
