import {
	Component,
	Input,
	Output,
	OnInit,
	EventEmitter,
	OnDestroy
} from '@angular/core';
import { NotyProps } from './notyPropsInterface';



@Component({
	selector: 'app-noty-item',
	templateUrl: './notyItem.html',
	styleUrls: ['noty-item.scss']
})

export class NotyItemComponent implements OnInit, OnDestroy {
	timeout: any;
	hoveredConfirm: boolean = false;
	autoCloseOn: boolean = false;
	progress = {
		width: '0',
		duration: '0'
	};

	@Output() onItemClose: EventEmitter<NotyProps> = new EventEmitter();
	@Input() props: NotyProps;

	ngOnDestroy() {
		clearTimeout(this.timeout);
	}

	ngOnInit() {

		if (this.props.confirm) {
			if (!this.props.onConfirm || typeof this.props.onConfirm !== 'function') {
				throw 'Noty with prop "confirm" set to true requires onConfirm callback';
			}
		}
		this.handleAutoClose();
	}

	handleAutoClose() {
		if (!this.props.autoClose || this.props.confirm) {
			return;
		}

		this.autoCloseOn = true;

		if (this.props.progressbar) {
			this.startProgressBar();
		}

		this.timeout = setTimeout(() => {
			this.close();
		}, this.props.duration);
	}

	startProgressBar() {
		if (this.autoCloseOn && this.props.progressbar) {
			setTimeout(() => {
				this.progress.width = '100%';
				this.progress.duration = `${this.props.duration}ms`;
			}, 0);

		}
	}

	stopProgressBar() {
		if (this.autoCloseOn && this.props.progressbar) {
			setTimeout(() => {
				this.progress.width = '0';
				this.progress.duration = '50ms';
			}, 0);
		}
	}

	close() {
		this.onItemClose.emit(this.props);
	}

	onConfirm($event) {
		this.close();
		if (this.props.exampleMode) {
			alert('Confirm Clicked');
		}
		clearTimeout(this.timeout);
		$event.stopPropagation();
	}

	onCancel($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.close();

		clearTimeout(this.timeout);
	}

	onMouseOverConfirm($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$event.stopImmediatePropagation();
		this.hoveredConfirm = true;
	}

	onMouseLeaveConfirm() {
		this.hoveredConfirm = false;
	}

	onMouseOverContainer() {
		if (!this.props.autoClose) {
			return;
		}
		clearTimeout(this.timeout);
		this.stopProgressBar();
	}

	onMouseLeaveContainer() {
		if (!this.props.autoClose) {
			return;
		}
		this.timeout = setTimeout(() => {
			this.close();
		}, this.props.duration);
		this.startProgressBar();
	}
}
