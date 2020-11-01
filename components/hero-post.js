import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({
	title,
	coverImage,
	date,
	// excerpt,
	// author,
	slug,
}) {
	return (
		<article>
			<figure className="mb-8 md:mb-16">
				<CoverImage title={title} src={coverImage} slug={slug} />
			</figure>
			<div className="mb-20 md:mb-28">
				<header>
					<div className="text-blue-700 uppercase tracking-widest text-sm font-semibold">
						{date !== undefined ? <DateFormatter dateString={date} /> : ''}
					</div>
					<h3 className="mt-4 text-4xl lg:text-6xl leading-tight font-semibold">
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
				</header>
			</div>
		</article>
	);
}
