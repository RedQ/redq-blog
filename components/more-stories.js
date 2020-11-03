import PostPreview from '../components/post-preview';
import Categories from './categories';

// dummy category
const categories = [
	{
		path: '/blog',
		title: '#React',
	},
	{
		path: '/blog',
		title: '#Next',
	},
	{
		path: '/blog',
		title: '#Gatsby',
	},
	{
		path: '/blog',
		title: '#GraphQL',
	},
	{
		path: '/blog',
		title: '#React Native',
	},
	{
		path: '/blog',
		title: '#WordPress',
	},
];

export default function MoreStories({ posts }) {
	return (
		<>
			<Categories className="mb-8 flex flex-wrap" items={categories} />
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-16 mt-8 gap-y-12 mb-32">
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
