import { Component, Injectable } from '@angular/core';
import { NotyProps } from '../noty/notyPropsInterface';
import {Noty} from "../noty/notyProvider";

@Component({
	selector: 'noty-example',
	templateUrl: './example.component.html',
	styleUrls: ['example.component.scss']
})

export class ExampleComponent implements Injectable{
	notyStyles = [ 'success', 'info', 'warning', 'error' ];
	notyPositions = [
		'top',
		'bottom',
		'left-bottom',
		'right-bottom',
		'left-top',
		'right-top'
	];
	animations = ['slide'];
	config: NotyProps = {
		message: 'This is Message!',
		duration: 1000,
		animation: 'slide',
		style: 'success',
		position: 'right-top',
		closable: true,
		autoClose: true,
		confirm: false,
		exampleMode: true,
		onConfirm: this.onConfirm,
		progressbar: true
	};

	onConfirm() {
		alert('Confirm clicked');
	}

	onSubmit() {
		this.noty.show(this.config);
	}

	onSuccess() {
		this.noty.success({ message: 'Success!' });
	}

	onWarning() {
		this.noty.warning({ message: 'Warning!' });
	}

	onError() {
		this.noty.error({ message: 'Error!' });
	}

	onInfo() {
		this.noty.show({ message: 'Info!' });
	}

	constructor(private noty: Noty) {}
}
