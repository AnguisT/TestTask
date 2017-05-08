import {Injectable} from '@angular/core';
import {PROPERTIES} from '../shared/countries';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PropertyService {

  getCountry() {
    return Observable.create(observer => {
      observer.next(PROPERTIES);
      observer.complete();
    });
  }

  getOneCountry(idCountry) {
    return Observable.create(observer => {
      observer.next(PROPERTIES.find(data => data.id === idCountry));
      observer.complete();
    });
  }
}
