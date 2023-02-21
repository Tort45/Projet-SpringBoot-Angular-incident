import { Injectable } from '@angular/core';
import {Incident} from './model/incident.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environement/environement.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  url = environment.apiUrl
  urlSuffix = '/incidents'

  constructor(private http: HttpClient) { }


  findAll(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.url}${this.urlSuffix}`);
  }

  findOne(id: number): Observable<Incident> {
    return this.http.get<Incident>(`${this.url}${this.urlSuffix}/${id}`);
  }

  add(prod: Incident): Observable<Incident> {
    return this.http.post<Incident>(`${this.url}${this.urlSuffix}/add`, prod);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.urlSuffix}/${id}`);
  }
}
