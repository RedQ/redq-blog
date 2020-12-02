import Image from 'next/image';

export default function Img({
	src,
	title,
	width,
	height,
	layout,
	fallbackSrc,
	className,
	...rest
}) {
	const fallback = fallbackSrc ? fallbackSrc : '/images/fallback-image.svg';

	return (
		<Image
			alt={title}
			width={width}
			height={height}
			layout={layout}
			src={src ? src : fallback}
			className={className}
			{...rest}
		/>
	);
}
