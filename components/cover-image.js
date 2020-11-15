import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({ title, src, slug, className }) {
	const image = (
		<Image
			src={src ? src : '/assets/fallback-image.svg'}
			width={588}
			height={360}
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
