import { Component } from '@angular/core';
import { Noty } from './noty/notyProvider';

@Component({
  selector: 'app-root',
  template:
	  `<noty-example></noty-example>
		<app-noty></app-noty>`,
  styleUrls: ['app.component.scss']
})

export class AppComponent { }
