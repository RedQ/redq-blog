import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<figure className="mb-8 md:mb-16">
				<CoverImage title={title} src={coverImage} slug={slug} />
			</figure>
			<div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
				<header>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<DateFormatter dateString={date} />
					</div>
				</header>
				<footer>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
					<Avatar name={author?.name} picture={author?.picture} />
				</footer>
			</div>
		</section>
	);
}
