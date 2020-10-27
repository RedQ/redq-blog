import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import CoverImage from './cover-image';
import DateFormatter from '../components/date-formatter';

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	slug,
}) {
	return (
		<article className="border border-solid border-gray-300 rounded-md overflow-hidden">
			<figure className="mb-8">
				<CoverImage slug={slug} title={title} src={coverImage} />
			</figure>
			<div className="pl-8 pr-8 mb-4 text-blue-700 uppercase tracking-widest text-sm font-semibold">
				{date !== undefined ? <DateFormatter dateString={date} /> : ''}
			</div>
			<header className="pl-8 pr-8 mb-6">
				<h3 className="text-2xl leading-snug">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a className="text-gray-900 hover:text-gray-700">{title}</a>
					</Link>
				</h3>
			</header>
			<p className="pl-8 pr-8 leading-relaxed text-gray-700 font-light mb-8">
				{excerpt}
			</p>
			<footer className="pl-8 pr-8 pb-8">
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a className="inline-flex items-center text-gray-900 hover:text-gray-700">
						Read More <BsArrowRight className="mt-1 ml-2 text-xl" />
					</a>
				</Link>
			</footer>
		</article>
	);
}
