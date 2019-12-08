import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { GitDataService } from './git-data.service';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
               useClass: GitDataService,
               multi: true},
              {provide: BASE_URL_TOKEN, 
               useValue: BASE_URL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
