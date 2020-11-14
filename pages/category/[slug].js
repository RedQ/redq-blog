import Layout from '../../components/layout';
import { getAllPosts } from '../../lib/api';
import {
	getCategories,
	getPostCategories,
	getPostsByCategory,
} from '../../lib/utils';

export default function Category({ categoryPosts }) {
	console.log(categoryPosts, 'categoryPosts');
	return <Layout>Show category here</Layout>;
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug', 'category']);
	const categories = getCategories(posts);
	return {
		paths: categories.map((category) => {
			return {
				params: {
					slug: category?.slug,
				},
			};
		}),
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const posts = await getAllPosts([
		'title',
		'date',
		'slug',
		'category',
		'author',
		'coverImage',
		'excerpt',
	]);
	const categoryPosts = getPostsByCategory(posts, params?.slug);
	return {
		props: {
			categoryPosts: categoryPosts.map((post) => ({
				...post,
				category: getPostCategories(post.category),
			})),
		},
	};
}
