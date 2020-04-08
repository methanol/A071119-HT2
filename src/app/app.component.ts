import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, Observer, fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN, IProject } from './config';
import { switchMap, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'HT';
  public isLoaderShown: boolean = false;
  public projects: IProject[] = [];
  public pageEvent: PageEvent;
  public pageCurrentIndex: number = 0;
  public pageCurrentSize: number = 10;
  public inputFlow$ = new Subject();

  private searchResultObserver: Observer<[]> = {
    next: (res: []) => this.projects = res,
    error: err => {},
    complete: () => {},
  };

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
    ) {}

  ngOnInit() {
    this.inputFlow$
    .pipe(
      debounceTime(800),
      distinctUntilChanged(),
      tap(() => this.isLoaderShown = true),
      switchMap((searchTerm: string) => this.getProjects(searchTerm)),
      tap(() => this.isLoaderShown = false)
    )
    .subscribe(this.searchResultObserver)
  }
  
  private getProjects(searchTerm: string): Observable<any> {
    return this.http.get<Observable<IProject[]>>(`${this.baseUrl}=${searchTerm}`);
  }

  public setSearchKey(key: string): void {
    if (!key.match(/\w/)) {
      return;
    }
    this.inputFlow$.next(key);
  }
}
