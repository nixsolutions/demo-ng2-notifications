import { Component, OnDestroy } from '@angular/core';
import { Noty } from './notyProvider';


@Component({
	selector: 'noty-example',
	template: '<button type="button" (click)="onButtonClicked()">Show Noty Example</button> ',
})

export class NotyExampleComponent {

	constructor(private noty: Noty) { }

	onButtonClicked() {
		this.noty.show({ message: 'Example' });
	}
}
