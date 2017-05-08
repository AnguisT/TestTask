import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  title = 'At this page you can get informations about countries.';
  information = 'Click on link "countries" and you see list countries and click at country you see more information about a country.';
}
