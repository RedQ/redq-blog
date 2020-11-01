import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
	return (
		<>
			{/*<header className="mb-8">
				<h2 className="text-4xl font-semibold tracking-tighter">
					More Stories
				</h2>
			</header>*/}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 mb-32">
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
		</>
	);
}
