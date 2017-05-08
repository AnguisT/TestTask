import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service'
import { Country } from '../shared/country'
import { PropertyService } from '../service/property-service';

@Component({
  moduleId: module.id,
  selector: 'app-country',
  templateUrl: 'country.component.html',
  styleUrls: ['country.component.css']
})
export class CountryComponent implements OnInit {
  countrys: Country[];
  term: string;

  constructor(private countryService: ServiceService, private _properService: PropertyService) {
    this.countrys = [];
  }

  ngOnInit() {
    this._properService.getCountry().subscribe(res => this.countrys = res);
    // this.countryService.getCountry().subscribe(countrys => this.countrys = countrys);
  }

  update(term: string) {
    this.term = term;
  }
}
