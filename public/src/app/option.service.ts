import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class OptionService {

  constructor(private _http:Http) { }

  create(option){
    return this._http.post('/options', option).map(data => data.json()).toPromise()
  }

  update(id){
    return this._http.post('/options:id', {}).map(data => data.json()).toPromise()
  }
}
