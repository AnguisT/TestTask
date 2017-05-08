import {Component, Input} from '@angular/core';
import {Country} from "../../shared/country";

@Component({
  moduleId: module.id,
  selector: 'country-item',
  templateUrl: 'country-item.component.html',
  styleUrls: ['country-item.component.css']
})
export class CountryItemComponent{
  @Input() country: Country;
}
