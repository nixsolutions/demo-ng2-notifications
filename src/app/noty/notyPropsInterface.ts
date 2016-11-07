type NotyStyles = 'success' | 'info' | 'warning' | 'error';
type NotyPosition = 'top'
	| 'bottom'
	| 'left-top'
	| 'right-top'
	| 'left-bottom'
	| 'right-bottom'

export interface NotyProps {
	message: string;
	duration?: number;
	animation?: string;
	closable?: boolean;
	onConfirm?: () => void;
	style?: NotyStyles;
	autoClose?: boolean;
	position?: NotyPosition;
	confirm?: boolean;
	exampleMode?: boolean;
	progressbar?: boolean;
}
