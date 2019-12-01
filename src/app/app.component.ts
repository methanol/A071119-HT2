import { Component } from '@angular/core';
import { GitDataService } from './git-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'HT';
  public results$: Observable<any[]>;
  public isLoaderShown: boolean = false;

  constructor(private jsonProjects: GitDataService) {

  }

  public setSearchKey(key: string): void {
    if (!key.match(/\w/)) {
      return;
    }
    this.isLoaderShown = true;
    this.results$ = this.jsonProjects.getProjects(key);
  }
}
