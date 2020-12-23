import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import DateFormatter from './date-formatter';
// motion variants
const fadeInBottom = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

export default function PostCard({ slug, date, title, excerpt, coverImage }) {
	const postThumbnail = (
		<Image
			width={716}
			height={438}
			className="rounded w-full"
			alt={`Cover Image for ${title}`}
			src={coverImage ? coverImage : '/images/fallback-image.svg'}
		/>
	);

	return (
		<motion.article variants={fadeInBottom}>
			<figure className="mb-8 relative">
				{slug ? (
					<Link as={`/blog/${slug}`} href="/blog/[slug]">
						<a aria-label={title}>{postThumbnail}</a>
					</Link>
				) : (
					postThumbnail
				)}
				{/* End of post thumbnail image */}
				<div
					className="absolute bg-gray-900 bg-opacity-25"
					style={{
						width: '80%',
						height: '80%',
						zIndex: -1,
						bottom: 0,
						left: '10%',
						filter: 'blur(10px)',
					}}
				></div>
				{/*End of post thumbnail's shadow*/}
			</figure>
			{/* End of post thumbnail */}
			<div className="mb-3 sm:mb-4 md:mb-3 lg:mb-4 text-rq-blue-800 uppercase tracking-widest text-sm font-semibold">
				{date !== undefined && date !== '' ? (
					<DateFormatter dateString={date} />
				) : (
					''
				)}
			</div>
			{/* End of post meta */}
			<header className="mb-4 sm:mb-6 md:mb-4 lg:mb-6">
				<h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold lg:leading-snug tracking-tight">
					<Link as={`/blog/${slug}`} href="/blog/[slug]">
						<a className="text-black transition-all duration-200 hover:text-gray-700">
							{title}
						</a>
					</Link>
				</h3>
			</header>
			{/* End of post title */}
			<p className="mb-6 sm:mb-8 md:mb-6 lg:mb-8 leading-relaxed text-gray-700">
				{excerpt}
			</p>
			{/* End of post excerpt */}
			<footer>
				<Link as={`/blog/${slug}`} href="/blog/[slug]">
					<a className="inline-flex items-center tracking-tight font-semibold text-black transition-all duration-200 hover:text-gray-700">
						Read More <BsArrowRight className="ml-2 text-xl" />
					</a>
				</Link>
			</footer>
		</motion.article>
	);
}
