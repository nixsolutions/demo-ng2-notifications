import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotyItemComponent } from './notyItem';
import { NotyComponent } from './noty';
import { NotyExampleComponent } from './noty.example';
import { Noty } from './notyProvider';

@NgModule({
	declarations: [
		NotyComponent,
		NotyItemComponent,
		NotyExampleComponent
	],
	imports: [ BrowserModule ],
	exports: [ NotyComponent ],
	providers: [ Noty ]
})

export class NotyModule { }
