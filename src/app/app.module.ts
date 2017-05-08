import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { routingcomponent } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/data.service';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryItemComponent } from './country/country-item/country-item.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { ServiceService } from './service/service.service';
import { PropertyService } from './service/property-service';
import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country/country-details/country-details.component';
import { CountrySearchComponent } from './country/country-search/country-search.component';
import { SearchPipePipe } from './country/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryItemComponent,
    CountryListComponent,
    HomeComponent,
    CountryDetailsComponent,
    CountrySearchComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ServiceService, PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
