import {Personne} from '../models/personne';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PersonneService {
  persons: Personne[] = [];
  baseURL = 'http://localhost:9090';

  constructor(private http: HttpClient){
  }

  getPersons(): Observable<Personne[]> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Accept', 'application/json');
    return this.http.get(this.baseURL + '/personnes', {headers: httpHeaders}).map(
      response => response,
    ).catch(error => Observable.throw(error));
  }

  getPersonById(id: string): Observable<Personne> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Accept', 'application/json');
    return this.http.get(this.baseURL + '/personnes/' + id, {headers: httpHeaders}).map(
      response => response,
    ).catch(error => Observable.throw(error));
  }

  createPerson(p: Personne): Observable<Personne> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Accept', 'application/json');
    return this.http.post(this.baseURL + '/personnes', p, {headers: httpHeaders}).map(
      person => person,
    ).catch(error => Observable.throw(error));
  }

  editPerson(p: Personne): Observable<Personne> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Accept', 'application/json');
    return this.http.put(this.baseURL + '/personnes/' + p.id, p, {headers: httpHeaders}).map(
      person => person,
    ).catch(error => Observable.throw(error));
  }

  deletePerson(p: Personne): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Accept', 'application/json');
    return this.http.delete(this.baseURL + '/personnes/' + p.id, {headers: httpHeaders, responseType: 'text'}).map(
      person => person,
    ).catch(error => Observable.throw(error));
  }

}
