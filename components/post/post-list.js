import PostCard from '../ui/post-card';

export default function PostList({ posts }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-16 mt-8 gap-y-12 mb-32">
			{posts.map((post) => (
				<PostCard
					key={post.slug}
					date={post.date}
					slug={post.slug}
					title={post.title}
					excerpt={post.excerpt}
					coverImage={post.coverImage}
				/>
			))}
		</div>
	);
}
