import PostPreview from "../components/post-preview";
import { getPostCategories } from "../lib/utils";

const MoreStories = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-16 mt-8 gap-y-12 mb-32">
			{posts.map((post) => (
				<PostPreview
					key={post.slug}
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
					categories={getPostCategories(post.category)}
					excerpt={post.excerpt}
				/>
			))}
		</div>
	);
};

export default MoreStories;
