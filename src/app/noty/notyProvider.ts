import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { NotyProps } from './notyPropsInterface';


@Injectable()
export class Noty {

	private messagesSource = new Subject<NotyProps>();
	public message$ = this.messagesSource.asObservable();

	public show(props: NotyProps) {
		this.messagesSource.next(props);
	}

	public success(props: NotyProps) {
		props.style = 'success';
		this.show(props);
	}

	public error(props: NotyProps) {
		props.style = 'error';
		this.show(props);
	}

	public info(props: NotyProps) {
		props.style = 'info';
		this.show(props);
	}

	public warning(props: NotyProps) {
		props.style = 'warning';
		this.show(props);
	}

	public confirm(props: NotyProps) {
		props.confirm = true;
		this.show(props);
	}
}
