import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN, IProject } from './config';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'HT';
  public results$: Observable<IProject[]>;
  public isLoaderShown: boolean = false;
  public projects: IProject[] = [];

  // @ViewChild('searchField', {static: true})
  // private searchField: HTMLInputElement;

  private inputFlow$ = new Subject();
  //private inputFlow$ = fromEvent(this.searchField, 'input');

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) 
    private baseUrl: string
    ) {}

  ngOnInit() {
    this.inputFlow$
    .pipe(
      debounceTime(800),
      switchMap((searchTerm: string) => this.results$ = this.getProjects(searchTerm))
    )
    .subscribe((res: []) => {
      this.projects = res;
    })
  }
  
  private getProjects(searchTerm: string): Observable<any> {
    return this.http.get<Observable<IProject[]>>(`${this.baseUrl}=${searchTerm}`);
  }

  public setSearchKey(key: string): void {
    if (!key.match(/\w/)) {
      return;
    }
    this.isLoaderShown = true;
    this.inputFlow$.next(key);
  }
}
