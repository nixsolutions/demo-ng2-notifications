import {
	Component,
	OnDestroy,
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/core';
import { Noty } from './notyProvider';
import { NotyProps } from './notyPropsInterface';
import { Subscription } from 'rxjs/Subscription';

interface MessagesCollection {
	rt: Array<NotyProps>;
	rb: Array<NotyProps>;
	t: Array<NotyProps>;
	lt: Array<NotyProps>;
	lb: Array<NotyProps>;
	b: Array<NotyProps>;
}

@Component({
	selector: 'app-noty',
	templateUrl: './noty.html',
	styleUrls: ['noty.scss'],
	animations: [
		trigger('leftRegion', [
			state('in', style({transform: 'translateX(0)'})),
			state('void', style({transform: 'translateX(-100%)'})),
			transition('void <=> *', [
				animate('300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')
			])
		]),
		trigger('rightRegion', [
			state('in', style({transform: 'translateX(0)'})),
			state('void', style({transform: 'translateX(100%)'})),
			transition('void <=> *', [
				animate('300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')
			])
		]),
		trigger('topRegion', [
			state('in', style({transform: 'translateY(0)'})),
			state('void', style({transform: 'translateY(-100%)'})),
			transition('void <=> *', [
				animate('300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')
			])
		]),
		trigger('bottomRegion', [
			state('in', style({transform: 'translateY(0)'})),
			state('void', style({transform: 'translateY(100%)'})),
			transition('void <=> *', [
				animate('300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)')
			])
		])
	]
})

export class NotyComponent implements OnDestroy {
	private messages: MessagesCollection = {
		b: [],
		t: [],
		rt: [],
		rb: [],
		lt: [],
		lb: []
	};
	private subscription: Subscription;

	private defaultOptions: NotyProps = {
		message: 'Message',
		duration: 1000,
		animation: 'slide',
		closable: true,
		style: "info",
		autoClose: true,
		progressbar: true
	};

	constructor(private noty: Noty) {
		this.subscription = noty.message$.subscribe((props: NotyProps) => {
			props = Object.assign({}, this.defaultOptions, props);
			let region = NotyComponent.getNotyRegion(props.position);

			this.messages[region].unshift(props);
		});
	}

	onItemClose(props) {
		let region = NotyComponent.getNotyRegion(props.position);
		let idx = this.messages[region].indexOf(props);

		idx !== -1 && this.messages[region].splice(idx, 1);
	}

	static getNotyRegion(position) {
		switch (position) {
			case 'left-top': return 'lt';
			case 'left-bottom': return 'lb';
			case 'right-top': return 'rt';
			case 'right-bottom': return 'rb';
			case 'top': return 't';
			case 'bottom': return 'b';
			default: return 'rt';
		}
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
