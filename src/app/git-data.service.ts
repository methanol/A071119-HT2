import { Injectable, Inject } from '@angular/core';
import { BASE_URL_TOKEN } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()

export class GitDataService {

  constructor(private http: HttpClient,
    @Inject(BASE_URL_TOKEN) 
    private baseUrl: string
  ) { }

  getProjects(searchTerm: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}=${searchTerm}`);
  }
}
