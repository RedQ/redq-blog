import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({
	src,
	slug,
	title,
	width,
	height,
	unsized,
	className,
}) {
	const image = (
		<Image
			width={width}
			height={height}
			unsized={unsized}
			className={className}
			alt={`Cover Image for ${title}`}
			src={src ? src : '/assets/fallback-image.svg'}
		/>
	);

	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
