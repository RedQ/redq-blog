import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import Container from '../../components/ui/container';
import Intro from '../../components/ui/intro';
import PostList from '../../components/post/post-list';
import { getAllPosts } from '../../lib/api';
import {
	getCategories,
	getPostCategories,
	getPostsByCategory,
} from '../../lib/utils';

export default function Category({ categoryPosts }) {
	const router = useRouter();
	const pageTitle = router?.query?.slug;

	return (
		<>
			<Head>
				<title>
					{`Category: ${pageTitle !== undefined ? pageTitle : ''}  | RedQ Inc`}
				</title>
			</Head>
			<Layout>
				<Intro
					title={`Category: ${pageTitle !== undefined ? pageTitle : ''}`}
				/>
				<Container className="pt-1">
					{categoryPosts.length > 0 && <PostList posts={categoryPosts} />}
				</Container>
			</Layout>
		</>
	);
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
