import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'country-search',
  templateUrl: 'country-search.component.html',
  styleUrls: ['country-search.component.css']
})
export class CountrySearchComponent {
  term: string = '';
  @Output() update: EventEmitter<string> = new EventEmitter();

  onUpdate() {
    this.update.emit(this.term);
    console.log(this.term);
  }

  // ngOnInit() {
  //   this.onUpdate();
  // }
}
