export default function Container({
	fluid,
	children,
	className = '',
	style = {},
}) {
	const defaultClasses = fluid
		? 'px-16 w-full mx-auto'
		: 'container mx-auto px-4';
	const fluidStyle = fluid ? { maxWidth: '1920px' } : style;

	return (
		<div className={`${defaultClasses} ${className}`} style={fluidStyle}>
			{children}
		</div>
	);
}
