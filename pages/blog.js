import Head from 'next/head';
import Container from '../components/container';
import Categories from '../components/categories';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { getPostCategories } from '../lib/utils';

export default function Index({ allPosts }) {
	let postsCategories = [];
	allPosts.forEach((post) => {
		if (post.category !== undefined && post.category !== '') {
			postsCategories.push(post.category);
		}
	});
	const allCategoriesInString = postsCategories.join().replace(/\s+/g, '');
	const allCategoriesInOneArr = allCategoriesInString.split(',');
	const allCategories = allCategoriesInOneArr.filter(
		(value, index) => allCategoriesInOneArr.indexOf(value) === index
	);
	const categories = getPostCategories(allCategories.join());

	return (
		<Layout>
			<Head>
				<title>Blog</title>
			</Head>
			<Intro title="Blog" />
			<Container>
				<Categories
					className="mb-6 sm:mb-8 flex flex-wrap"
					items={categories}
				/>
				{allPosts.length > 0 && <MoreStories posts={allPosts} />}
			</Container>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'category',
		'author',
		'coverImage',
		'excerpt',
	]);
	return {
		props: { allPosts },
	};
}
