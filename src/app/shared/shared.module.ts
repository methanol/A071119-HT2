import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
	MatInputModule,
	MatButtonModule,
	MatCardModule,
	MatListModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
	BrowserAnimationsModule
  ]
})
export class SharedModule {
}