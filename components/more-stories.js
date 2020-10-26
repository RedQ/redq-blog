import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
	return (
		<section>
			<header className="mb-8">
				<h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
					More Stories
				</h2>
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
