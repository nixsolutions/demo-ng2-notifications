
import {Noty} from "./notyProvider";
import {NotyProps} from "./notyPropsInterface";

describe('NotyProvider Tests', () => {
	let service:Noty = new Noty();

	it('The messages$ observalble should be accessible', () => {
		expect(service.message$).not.toBe(undefined);
	});

	it('The messages$ must has subscribe method', () => {
		expect(typeof service.message$.subscribe).toBe('function');
	});

	it('service.show method should trigger handler on message$ and transfer to it appropriate props', () => {
		let original:NotyProps = { message: '' };

		service.message$.subscribe(props => {
			expect(props).toEqual(original);
		});

		service.show(original);
	})
});
