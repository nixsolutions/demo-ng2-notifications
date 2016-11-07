import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotyModule } from './noty/noty.module';
import { ExampleModule } from './example';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  NotyModule,
	  ExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
