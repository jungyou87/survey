import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class PollService {

  constructor( private _http:Http) { }

  index(){
    return this._http.get('/polls').map(data => data.json()).toPromise()
  }

  create(poll){
    return this._http.post('/polls', poll).map(data => data.json()).toPromise()
  }

  show(id){
    return this._http.get(`/polls/${id}`).map(data => data.json()).toPromise()
  }

  delete(id){
    return this._http.delete(`/polls/${id}`).map(data => data.json()).toPromise()
  }
}
