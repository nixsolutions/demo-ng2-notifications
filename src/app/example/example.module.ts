import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from '../utils';

import { NotyModule } from '../noty/noty.module';

import { ExampleComponent } from './example.component';

@NgModule({
	declarations: [
		ExampleComponent,
		CapitalizePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		NotyModule
	],
	exports: [ ExampleComponent ],
})

export class ExampleModule { }
