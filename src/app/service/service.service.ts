import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Country } from '../shared/country'
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class ServiceService {
  private apiUrl = 'api/v1/country';

  constructor(private http: Http) { }

  getCountry(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map(res => res.json().data as Country[])
      .catch(ServiceService.handleError);
  }

  getOneCountry(idCountry): Observable<any> {
    return this.http.get(this.apiUrl + '/' + idCountry)
      .map(res => res.json().data as Country)
      .catch(ServiceService.handleError);
  }

  private static handleError(error: any) {
    console.error('Произошла ошибка ', error);
    return Observable.throw(error.message || error);
  }
}
