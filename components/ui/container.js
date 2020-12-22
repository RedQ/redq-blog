export default function Container({
	fluid,
	children,
	className = '',
	style = {},
}) {
	const defaultClasses = fluid
		? 'px-4 lg:px-8 2xl:px-16 w-full max-w-rq-1920 mx-auto'
		: 'container mx-auto px-4 lg:px-8';
	// const fluidStyle = fluid ? { maxWidth: '1920px' } : style;

	return (
		<div className={`${defaultClasses} ${className}`} style={style}>
			{children}
		</div>
	);
}
