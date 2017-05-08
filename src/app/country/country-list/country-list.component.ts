import {Component, Input} from '@angular/core';
import {Country} from "../../shared/country";

@Component({
  moduleId: module.id,
  selector: 'country-list',
  templateUrl: 'country-list.component.html',
  styleUrls: ['country-list.component.css']
})
export class CountryListComponent {
  @Input() countrys: Country[];
  @Input() term: string;
}
