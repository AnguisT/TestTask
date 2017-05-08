import {Component, Input, OnInit} from '@angular/core';
import {PropertyService} from "../../service/property-service";
import {Country} from "../../shared/country";
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";

@Component({
  moduleId: module.id,
  selector: 'country-details',
  templateUrl: 'country-details.component.html',
  styleUrls: ['country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country: Country;
  private sub: any;

  constructor(private _properService: PropertyService, private _countryService: ServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      // console.log(id);
      this._properService.getOneCountry(id).subscribe(res => this.country = res);
      // this._countryService.getOneCountry(id).subscribe(res => this.countries = res);
    });
    // console.log(this.countries);
  }

}
