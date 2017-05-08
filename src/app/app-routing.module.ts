import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {CountryComponent} from "./country/country.component";
import {HomeComponent} from "./home/home.component";
import {CountryDetailsComponent} from "./country/country-details/country-details.component";

export const router: Routes = [
  { path: '', component: HomeComponent},
  { path: 'country', component: CountryComponent},
  { path: 'country/:id', component: CountryDetailsComponent},
  { path: '**', component: HomeComponent},
];

@NgModule ({
  imports:[
    RouterModule.forRoot(router),
  ],
  exports:[
    RouterModule,
  ]
})

export class AppRoutingModule{}
export const routingcomponent = [CountryComponent];
