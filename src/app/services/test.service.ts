import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:7129/api';
  getTests(){
    return this.http.get(this.BaseURI + '/tests');
  }
  addTests(formData):Observable<Test>{
    return this.http.post<Test>(this.BaseURI + '/tests/test', formData);
  }
}
