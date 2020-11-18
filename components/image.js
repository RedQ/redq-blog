import Image from 'next/image';

export default function Img({
	src,
	title,
	width,
	height,
	unsized,
	fallbackSrc,
	className,
}) {
	const fallback = fallbackSrc ? fallbackSrc : '/assets/fallback-image.svg';

	return (
		<Image
			alt={title}
			width={width}
			height={height}
			unsized={unsized}
			src={src ? src : fallback}
			className={className}
		/>
	);
}
