import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [
	MatInputModule,
	MatButtonModule,
	MatCardModule,
	MatListModule,
	MatProgressSpinnerModule
  ]
})
export class SharedModule {
}