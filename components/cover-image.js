// import cn from 'classnames';
// import Image from 'next/image';
import Link from 'next/link';
import fallbackImage from '../public/assets/fallback-image.svg';

export default function CoverImage({
	title,
	src,
	slug,
	className,
	// width,
	// height,
	// unsized,
}) {
	const image = (
		<img
			src={src ? src : fallbackImage}
			// width={width}
			// height={height}
			// unsized={unsized ? unsized : true}
			alt={`Cover Image for ${title}`}
			className={className}
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
